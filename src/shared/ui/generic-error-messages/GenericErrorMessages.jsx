const GenericErrorMessages = ({ error }) => {
  if (error === 'city not found') {
    return <div>Город не найден! Введите правильное название.</div>
  } else {
    return <div>{error}</div>
  }
}
export default GenericErrorMessages;