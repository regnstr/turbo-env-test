import { PRIVATE_GREETING } from '$env/static/private'

export const sayHi = () => {
  return { greeting: PRIVATE_GREETING }
}
