import { useEffect, useState } from 'react'
import { Form } from './componrnts/Form/Form'
import { MessageList } from './componrnts/Message/MessageList'

export const App = () => {
  const [messages, setMessages] = useState([])

  const addMessage = (newMessage) => {
    setMessages((prevMessage) => [...prevMessage, newMessage])
  }

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author === 'USER'
    ) {
      const timeout = setTimeout(() => {
        addMessage({
          author: 'BOT',
          value: 'Im BOT',
        })
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [messages])

  return (
    <>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </>
  )
}
export default App
