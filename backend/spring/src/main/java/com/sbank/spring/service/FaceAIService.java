package com.sbank.spring.service;

import java.awt.image.BufferedImage;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;

import javax.imageio.ImageIO;
import javax.transaction.Transactional;
import javax.xml.bind.DatatypeConverter;

import com.sbank.spring.dto.ImageDto;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class FaceAIService {

    private @Value("${social.naver.client-id}") String clientId;
    private @Value("${social.naver.client-secret}") String clientSecret;
    private @Value("${social.naver.url.face}") String apiURL;

    @Transactional
    public Integer recognizeFace(ImageDto image) throws IOException {

        String base64Image = image.getImage().split(",")[1]; //필요한 부분만 추출
        byte[] imageBytes = DatatypeConverter.parseBase64Binary(base64Image);
        BufferedImage img = ImageIO.read(new ByteArrayInputStream(imageBytes));

        String random = Integer.toString((int)(Math.random() * 100000) + 1); //추우 이미지명 충돌 문제 있을 수 있으니 방지 위한 설정

        File uploadFile = new File("image" + random + ".jpg");
        ImageIO.write(img, "jpg", uploadFile); //jpg 파일 생성
        int first = 0, second = 0;

        try {
            String paramName = "image"; // 파라미터명은 image로 지정
            URL url = new URL(apiURL);
            HttpURLConnection con = (HttpURLConnection)url.openConnection();
            con.setUseCaches(false);
            con.setDoOutput(true);
            con.setDoInput(true);

            // multipart request
            String boundary = "---" + System.currentTimeMillis() + "---";
            con.setRequestProperty("Content-Type", "multipart/form-data; boundary=" + boundary);
            con.setRequestProperty("X-Naver-Client-Id", clientId);
            con.setRequestProperty("X-Naver-Client-Secret", clientSecret);
            OutputStream outputStream = con.getOutputStream();
            PrintWriter writer = new PrintWriter(new OutputStreamWriter(outputStream, "UTF-8"), true);
            String LINE_FEED = "\r\n";
            
            // file 추가
            String fileName = uploadFile.getName();
            writer.append("--" + boundary).append(LINE_FEED);
            writer.append("Content-Disposition: form-data; name=\"" + paramName + "\"; filename=\"" + fileName + "\"").append(LINE_FEED);
            writer.append("Content-Type: "  + URLConnection.guessContentTypeFromName(fileName)).append(LINE_FEED);
            writer.append(LINE_FEED);
            writer.flush();
            FileInputStream inputStream = new FileInputStream(uploadFile);
            byte[] buffer = new byte[4096];
            int bytesRead = -1;
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }
            outputStream.flush();
            inputStream.close();
            writer.append(LINE_FEED).flush();
            writer.append("--" + boundary + "--").append(LINE_FEED);
            writer.close();

            uploadFile.delete(); //사용한 이미지 파일 삭제

            BufferedReader br = null;
            int responseCode = con.getResponseCode();
            if(responseCode==200) { // 정상 호출
                br = new BufferedReader(new InputStreamReader(con.getInputStream()));
            } else {  // 에러 발생
                System.out.println("에러 발생!! responseCode= " + responseCode);
                br = new BufferedReader(new InputStreamReader(con.getInputStream()));
            }
            String inputLine;
            StringBuffer response = new StringBuffer();
            while ((inputLine = br.readLine()) != null) {
                response.append(inputLine);
            }
            br.close();
            
            JSONObject result = new JSONObject(response.toString()); //json 형식으로 변경
            String ages = (String)result.optJSONArray("faces").getJSONObject(0).getJSONObject("age").get("value");
            String[] data = ages.split("~");
            first = Integer.parseInt(data[0]);
            second = Integer.parseInt(data[1]);
            
            System.out.println(response.toString()); //반환된 데이터 확인
            System.out.println(first + " " + second);

        } catch (Exception e) {
            System.out.println(e);
        }

        return (first + second) / 2;

    }
    
}
