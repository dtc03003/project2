import Swal from 'sweetalert2'

export default function RecordStop() {
  return (
    Swal.fire({
      icon: 'success',
      title: '다 됐습니다!',
      confirmButtonText: '확인',
      confirmButtonColor: '#1E90FF',
      html: '확인 버튼을 눌러 이동하세요!',
      }).then(() => {
        window.location.href="/loading"
      })
      
  )
  
}