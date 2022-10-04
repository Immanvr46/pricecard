import './App.css'
import react from 'react'
import PriceCard from './components/PriceCard';
let data=[
  {
        plan:"FREE",
        price:"0",
        users:"Single Users",
        usersEnabler:true,
        storage:"5GB Storage",
        storageEnabler:true,
        publicProjects:"Unlimited Public Projects",
        publicProjectsEnabler:true,
        communityAccess:"Community Access",
        communityAccessEnabler:true,
        privateProjects:"Unlimited Private Projects",
        privateProjectsEnabler:false,
        phoneSupport:"Decicated Phone Support",
        phoneSupportEnabler:false,
        subDomain :"Free Subdomain",
        subDomainEnabler:false,
        statusReport:"Monthly Status Reports",
        statusReportEnabler:false
        },
        {
          plan:"PLUS",
          price:"9",
          users:"5 Users",
          usersEnabler:true,
          storage:"50GB Storage",
          storageEnabler:true,
          publicProjects:"Unlimited Public Projects",
          publicProjectsEnabler:true,
          communityAccess:"Community Access",
          communityAccessEnabler:true,
          privateProjects:"Unlimited Private Projects",
          privateProjectsEnabler:true,
          phoneSupport:"Decicated Phone Support",
          phoneSupportEnabler:true,
          subDomain :"Free Subdomain",
          subDomainEnabler:true,
          statusReport:"Monthly Status Reports",
          statusReportEnabler:false
        },
          {  
            plan:"PRO",
            price:"49",
            users:"Unlimited Users",
            usersEnabler:true,
            storage:"150GB Storage",
            storageEnabler:true,
            publicProjects:"Unlimited Public Projects",
            publicProjectsEnabler:true,
            communityAccess:"Community Access",
            communityAccessEnabler:true,
            privateProjects:"Unlimited Private Projects",
            privateProjectsEnabler:true,
            phoneSupport:"Decicated Phone Support",
            phoneSupportEnabler:true,
            subDomain :" Unlimited Free Subdomain",
            subDomainEnabler:true,
            statusReport:"Monthly Status Reports",
            statusReportEnabler:true
            }
         ]
         function App() {
          return <>
           <section className="pricing py-5">
          <div className="container">
            <div className="row">
              <PriceCard data={data[0]}/>
              <PriceCard data={data[1]}/>
              <PriceCard data={data[2]}/>
            </div>
          </div>
        </section>
            </>
        }
        
        export default App ;
        