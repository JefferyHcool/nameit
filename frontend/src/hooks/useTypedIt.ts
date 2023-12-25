import TypeIt from 'typeit'

export const useTypedHook = (element: string | any, options?: any) => {
  return new TypeIt(element, options)
}
