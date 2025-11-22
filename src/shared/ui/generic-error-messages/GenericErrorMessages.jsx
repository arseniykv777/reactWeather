import './GenericErrorMessages.scss'

const GenericErrorMessages = ({ error }) => {
  if (error === 'city not found') {
    return <div className={'error-message'}>Город не найден! Введите правильное название.</div>
  }
  return <div className={'error-message'}>{error}</div>
}
export default GenericErrorMessages;