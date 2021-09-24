import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import HomePage from "../PageComponents/HomePage";

const client = new ApolloClient({
  uri: 'https://smart-meeting.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

const App = () => (
  <div className="appContainer">
    <ApolloProvider client={client}><HomePage /></ApolloProvider>
  </div>
)

export default App;
