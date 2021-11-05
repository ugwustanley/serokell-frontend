
const getById = (id: string)=> document.getElementById(id);
//<HTMLElement>
const getByClass = (name: string) => document.getElementsByClassName(name)[0];

const logFormData = ():void =>{
   const name = <HTMLElement>getById('name')
   const email = <HTMLElement>getById('email')
   const message = <HTMLElement>getById('message')

   console.log(`
        user name: ${name}
        user email: ${email}
        user message: ${message}
   `)
}

getById("submit")?.addEventListener('click' , logFormData)

getById("nav-open")?.addEventListener("click", ():any => getById("mobile-nav")!.style.display = 'block')

getById("nav-close")?.addEventListener("click", ():any => getById("mobile-nav")!.style.display = 'none')

getById("contact-us")?.addEventListener("click", ():any => getById("mobile-nav")!.style.display = 'none')

