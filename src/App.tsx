import {IntroSection} from '0-Intro/IntroSection';
import {HookBasicsSection} from '1-HooksBasics/HooksBassicsSection'
import classes from './App.module.css'
import { MasterDetail } from 'components/MasterDetail/MasterDetail'

function App() {
 return(
    <MasterDetail>
      <IntroSection/>
      <HookBasicsSection/>
      
    </MasterDetail>
 ) 
}

export default App
