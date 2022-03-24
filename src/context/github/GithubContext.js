import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducers';

const GithubContext = createContext();

//* CREATE A PROVIDER FUNCTION

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // * Get search results

  // const getRepos = async (login, repos) => {
  //   setLoading();

  //   const response = await fetch(`${GITHUB_URL}/users/${login}/${repos}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   if (response.status === 404) {
  //     window.location = '/notfound';
  //   }

  //   const data = await response.json();

  //   dispatch({ type: 'GET_REPOS', payload: data });
  // };

  // * Set loading

  // * return context provider
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
