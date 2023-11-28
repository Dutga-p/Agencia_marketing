import { connect } from "react-redux"
const navigation = {
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/Dutga-p',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/david-ord%C3%B3%C3%B1ez-mar%C3%ADn-26a504256/',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-2.58 16h-2.29V9.5h2.29zm-1.146-10.255c-.8 0-1.446-.646-1.446-1.445 0-.799.646-1.445 1.446-1.445.798 0 1.445.646 1.445 1.445 0 .799-.647 1.445-1.445 1.445zM18.678 16H16.53v-2.795c0-1.83-.657-3.072-2.29-3.072-1.244 0-1.983.836-2.308 1.646-.119.289-.149.692-.149 1.096V16H8.484V9.5h2.123v1.464h.029c.296-.561 1.02-1.154 2.096-1.154 1.525 0 2.676 1 2.676 3.15V16zM20 9.5h-1.895V7.57c0-2.18-1.457-3.43-3.383-3.43-1.098 0-1.967.608-2.297 1.484h-.03V7.57H10.97c.06-6.268 0-7.12 0-7.538C10.97.85 11.727 0 13.568 0c1.3 0 2.432.193 3.268.977.76.698 1.018 1.663 1.018 2.738V9.5z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Gmail',
        href: 'mailto:david.camilo.ordonez@correounivalle.edu.co',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M2 4.21l10 6.3 10-6.3V5a2 2 0 00-2-2H4a2 2 0 00-2 2v-.79zM0 5a4 4 0 014-4h16a4 4 0 014 4v14a4 4 0 01-4 4H4a4 4 0 01-4-4V5z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  }
function Footer(){
    return(
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <br/>  
            <p className="text-base text-gray-400 xl:text-center">&copy; 2023 DCOMSD Company, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    ) 
}
const mapStateToProps = state => ({

})
export default connect (mapStateToProps,{

}) (Footer)