import Swal from 'sweetalert2'
import './ToastAlert.css'

export default function DepositToast() {
  return (
      
    Swal.fire({
      customClass: {
        container: 'swal-container'
      },
      icon: 'info',
      html: '"금융 상품 페이지"를 입력받았습니다.<br>금융 상품 페이지로 이동할까요?<br>입력한 정보가 아니라면 <br>처음화면으로 돌아갑니다.',
      toast: true,
      position: 'center-right',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: '네',
      denyButtonText: `아니요`,
      cancelButtonText: '취소',
      })
      .then((result) => {
        if (result.isConfirmed) {
          window.location.href='/deposit'
        } else if (result.isDenied) {
          window.location.href='/'
        }
      })
  )
}