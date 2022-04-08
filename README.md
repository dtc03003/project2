<div  align="left">

<img  width="200"  src="https://user-images.githubusercontent.com/78357979/162353071-06f178a6-aa24-4000-a6e1-52d969af78b0.png">

</div>

<br/>

  

## 🌐 SBank ?

  

<font  size="5"  color="orange">**SBank**</font> 프로젝트는 디지털 트렌스포메이션의 소외계층(노령층)을 위한 AI 음성 도우미 서비스를 적용한 사이트로 복잡한 은행 사이트를 음성 명령을 통해 쉽게 이용할 수 있도록 제작되었습니다. 
<h3> 🖥 Fornt-End </h3>
</br></br>

  

<img  width="1000px"  src="https://media.discordapp.net/attachments/950243921835991040/961824897049448458/version.gif">
</br></br>  

## 💡 Description
>  <h3><font  color="red">프로젝트 기획 배경</font></h3>
<h5>프로젝트 기획 배경은 다음과 같습니다.</h5>
<ul>
<li>✔️3D 사람 캐릭터 Sori의 사용자의 음성 인식을 통해 원하는 서비스로 안내 제공하여 보다 쉬워진 은행 서비스 이용 가능</li>
<li>✔️3D 사람 캐릭터 Sori의 TTS 안내로 사용자가 직접 음성을 듣고 말하며 보다 친화적인 서비스 이용 가능</li>
<li>✔️Naver CFR API를 사용하여 각 개별 사용자의 얼굴을 인식하고 분석하여 이에 적합한 나이대 상품을 추천하여 안내</li>
</ul>
<br/>

>  <h3><font  color="green">주요 서비스 기능</font></h3>

<h5>프로젝트의 대표 서비스는 다음과 같습니다.</h5>
<ul>
<li>⭐️3D 캐릭터 **소리**를 통한 음성 안내 및 인식</li>
<li>⭐️음성 명령을 통한 사이트 주요 페이지로 이동</li>
<li>⭐️얼굴 인식을 통한 연령별 금융 상품 추천</li>
</ul>
<br/>

  
  

## 🧩 Design

>  <h3><font  color="blue">ERD</font></h3>
<br/>

  

<img  width="1000px"  alt="데이터베이스ERD"  src="https://user-images.githubusercontent.com/78357979/162355398-b100ee4d-1fdd-416a-8d34-d4952e244ca5.png">
<br/>

<img  width=1000  alt="요구사항명세서"  src="https://media.discordapp.net/attachments/950243921835991040/961825623242833940/unknown.png?width=810&height=561"  >

<br/>

  
## 📚 준비하기

  


- git clone https://lab.ssafy.com/s06-ai-speech-sub2/S06P22D201.git

- Frontend

```bash

docker build -t frontend ./frontend

docker run -d --name frontend -p 3000:3000 frontend

```

  

- Backend

- SpringBoot

```bash

gradle clean

gradle bootJar

docker build -t ./S06P22D201/backend/spring .

docker run -d --name backend -p 9000:9000 backend/spring

```

- FastAPI

```bash

sudo apt install -y docker.io

docker pull klbm126/kosbert_image:latest

docker run -d -i -t --name fastAPI -p 5555:5555 klbm126/kosbert_image:latest

docker exec -it fastAPI bash

git clone https://lab.ssafy.com/s06-ai-speech-sub2/S06P22D201.git

mv KoSentenceBERT_SKTBERT/ /S06P22D201/backend/fastapi

mv KoBERT/ /S06P22D201/backend/fastapi

mv ./S06P22D201/backend/fastapi/kobert/SemanticSearch.py ./S06P22D201/backend/fastapi/KoSentenceBERT_SKTBERT

pip install -e ./S06P22D201/backend/fastapi

pip install fastapi

pip install uvicorn[standard]

pip install python-multipart

conda install pytorch==1.7.1 torchvision==0.8.2 torchaudio==0.7.2 cudatoolkit=10.2 -c pytorch

conda install librosa

uvicorn main:app --reload --host=0.0.0.0 --port=5555

```

- DB(MySQL)

```bash

sudo docker pull mysql

sudo docker run --name mysql -e MYSQL_ROOT_PASSWORD=<"비밀번호"> -d -p 3306:3306 -v /home/ubuntu/mysql:/var/lib/mysql mysql:latest

docker exec -i -t mysql bash

mysql -u root -p

"실행 시 설정한 비밀번호 입력"

create database sbank default character set utf8mb4;

```
  

## 💻 서비스 주요 기능

  

- 로그인 회원가입 관리

- 음성 인식을 통한 페이지 이동

- 얼굴 인식을 통한 연령별 맞춤 금융 상품 추천

- 입금, 송금 기능

- 자신의 소비내역 그래프 확인

  
  

---

  

## 🛠 Dev Skills

  

<div  style="display:flex; justify-content: center;">

<p  align="left">

<a  href="https://ko.reactjs.org/">

<img src="https://img.shields.io/badge/React-17.0.2-blue?style=plastic&logo=react">

</a>

<a  href="https://ko.reactjs.org/">

<img src="https://img.shields.io/badge/javascript-6.0.0-yellow?style=plastic&logo=javascript">

</a>

<a  href="https://ko.redux.js.org/">

<img src="https://img.shields.io/badge/Redux-7.2.6-blue?style=plastic&logo=redux">

</a>

<a  href="https://ko.redux.js.org/">

<img src="https://img.shields.io/badge/axios-0.25.0-red?style=plastic&logo=axios">

</a>

</p>

<p  align="left">

<a  href="https://www.java.com/ko/">

<img src="https://img.shields.io/badge/JAVA-1.8-blue?style=plastic&logo=java">

</a>

<a  href="https://spring.io/">

<img src="https://img.shields.io/badge/spring_boot-2.3.2.RELEASE-brightgreen?style=plastic&logo=Spring">

</a>

<a  href="https://spring.io/projects/spring-security">

<img src="https://img.shields.io/badge/Spring_Security-5.4.6-brightgreen?style=plastic&logo=Spring">

</a>

<a  href="https://spring.io/projects/spring-data-jpa">

<img src="https://img.shields.io/badge/Spring%20Data%20JPA-4.3.1-brightgreen?style=plastic&logo=Spring">

</a>

<a  href="https://projectlombok.org/">

<img src="https://img.shields.io/badge/Lombok-1.18.12-red?style=plastic&logo=ProjectLombok">

</a>

<p  align="left">

<img src="https://img.shields.io/badge/fastAPI-0.75.1-green?style=plastic&logo=fastAPI">

<img src="https://img.shields.io/badge/pytorch-1.7.1-red?style=plastic&logo=pytorch">

<img src="https://img.shields.io/badge/torchaudio-0.7.2-red?style=plastic&logo=torchaudio">

<img src="https://img.shields.io/badge/cuda-10.2-green?style=plastic&logo=cuda">
</p>

</p>

<p  align="left">

<a  href="https://docs.aws.amazon.com/ec2/index.html?nc2=h_ql_doc_ec2">

<img src="https://img.shields.io/badge/AWS-EC2-orange?style=plastic&logo=amazon">

</a>

<a  href="https://www.docker.com/get-started">

<img src="https://img.shields.io/badge/docker-19.03.8-blue?color=blue&style=plastic&logo=docker">

</a>

<a  href="https://www.jenkins.io/">

<img src="https://img.shields.io/badge/Jenkins-2.263.4-%236DB33F?color=red&style=plastic&logo=Jenkins">

</a>

</p>

<p  align="left">

<a  href="https://www.atlassian.com/ko/software/jira/">

<img src="https://img.shields.io/badge/JIRA-Atlassian-blue?style=plastic&logo=jira">

</a>

<a  href="https://www.notion.so/9afd18e7efe54feba56f48c35a99270b">

<img src="https://img.shields.io/badge/Notion-2020.12-lightgrey?style=plastic&logo=notion">

</a>

</p>

</div>
  

## 💬 Documents

  

- 🔗<font  color="green">  [Notion-Link](https://www.notion.so/280683b15ad84c9eb85ca17cf6f159d2?v=0cd541c3a61e44ce8ba64f2404d5b602)</font>

  
  

# 🏷License

  

<p>

This software is licensed under the MIT <a  href="https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp"  _blank="new">©SSAFY</a>.</p>
