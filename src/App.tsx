import { IntroSection } from '0-Intro/IntroSection';
import { HookBasicsSection } from '1-HooksBasics/HooksBassicsSection';
import { SideEffectsSection } from '2-SideEffects/SideEffetsSection';
import { ImperativeCodeSection } from '3-ImperativeCode/ImperativeCodeSection';
import { MemoizationSection } from '4-Memoization/MemoizationSection';
import { ComponentsLifecycleSection } from '5-ComponentLifeCycle/ComponentsLifecycleSection';
import { ContextAndReducerSection } from '6-ContextAndReducer/ContextAndReducerSection';
import { StateManagementSection } from '7-StateManagement/StateManagmentSection';
import { DataFetchingSection } from '8-DataFetching/DataFecthingSection';
import { RoutingSection } from '9-Routing/RoutingSection';

import classes from './App.module.css'
import { MasterDetail, OutsideLink, StyledLink } from 'components';
import { RouterPath } from 'config/RouterPath';

 export function App() {
  return (
    <MasterDetail>
      <IntroSection />
      <HookBasicsSection />
      <SideEffectsSection />
      <ImperativeCodeSection />
      <MemoizationSection />
      <ComponentsLifecycleSection />
      <ContextAndReducerSection />
      <StateManagementSection />
      <DataFetchingSection />
      <RoutingSection />

      <div className={classes.linksSection}>
        <StyledLink to={RouterPath.ABOUT}>📚 Про цей курс</StyledLink>
        <OutsideLink href='https://a-polishchuk.github.io/mastering-react/'>
          ⚛️ Production версія
        </OutsideLink>
      </div>
    </MasterDetail>
  )
}

