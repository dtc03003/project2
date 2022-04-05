import Swal from 'sweetalert2'
import './ToastAlert.css'

export default function FaceToast() {
  return (
      
    Swal.fire({
      customClass: {
        container: 'swal-container'
      },
      icon: 'info',
      html: '"추천 페이지"를 입력받았습니다.<br>얼굴인식 추천 페이지로 이동할까요?<br>입력한 정보가 아니라면 <br>처음화면으로 돌아갑니다.',
      toast: true,
      position: 'bottom-right',
      showDenyButton: true,
      confirmButtonText: '네',
      denyButtonText: `처음으로`,
      })
      .then((result) => {
        if (result.isConfirmed) {
          window.location.href='/faceai'
        } else if (result.isDenied) {
          window.location.href='/'
        }
      })
  )
}