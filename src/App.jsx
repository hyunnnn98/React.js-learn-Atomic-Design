import React, { lazy, Suspense, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// 스타일
import { GlobalStyle } from './assets/styles/globalStyle';

// 언어 설정
import { IntlProvider } from 'react-intl';
import LangCode from './@types/langCode';
import ko from './assets/locale/ko';
import jp from './assets/locale/jp';
import useUser from './hooks/useUser';
import { InfoNavUrl } from './@types/pageNavigation';

// 페이지 로딩 최적화
const MainPage = lazy(() => import('./pages/MainPage'));
const InfoPage = lazy(() => import('./pages/InfoPage'));

function App() {
  const { languageData } = useUser();

  useEffect(() => {
    window.addEventListener('beforeunload', e => {
      e.preventDefault();
      e.returnValue = '';
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <IntlProvider locale={languageData} messages={languageData === LangCode.KOREAN ? ko : jp}>
        <Suspense fallback={<div>default background</div>}>
          <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path={InfoNavUrl.default} component={InfoPage} exact />
            <Redirect from="*" to="/" />
          </Switch>
        </Suspense>
      </IntlProvider>
    </>
  );
}

export default App;
