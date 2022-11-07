export const MessageList = ({ messages }) => {
  return (
    <ul>
      {/* Рендерить список сообщений через map */}
      {messages.map((message, index) => (
        <li key={index}>
          {message.author}: {message.value}{' '}
        </li>
      ))}
    </ul>
  )
}
