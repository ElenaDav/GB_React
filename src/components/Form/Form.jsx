import style from './Form.module.css'

export const Form = () => {
  const name = 'Lena'
  return (
    <form className={style.form}>
      <p>Name: {name}</p>
      <button type="button"> click</button>
    </form>
  )
}
