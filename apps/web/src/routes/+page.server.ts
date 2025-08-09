import { sayHi } from "$lib/server"

export const load = () => {
  return { greeting: sayHi().greeting }
}
