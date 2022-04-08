import Swal from 'sweetalert2'

export default function NomSoriClick() {
  return (
    Swal.fire({
      icon: 'info',
      title: '안녕하세요',
      html: 'S-Bank의 마스코트 소리입니다.<br>무엇을 도와드릴까요?',
      footer: '아래의 녹음 버튼을 누르시고 필요한 서비스를 이야기해주세요.',
      showConfirmButton: false,
      })
  )
}