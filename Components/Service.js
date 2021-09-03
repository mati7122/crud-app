import React, {createContext} from 'react';
import axios from 'axios';
import useSWR from 'swr';
import Global from '../Global';

export const DataContext = createContext(); 

const fetcher = url => axios.get(Global.uri + 'get-data').then(res => res.data.succes)

export const DataProvider = ({children}) => {

    const { data, error } = useSWR('get-data', fetcher);

    return(
        <DataContext.Provider value={{data, error}}>
            {children}
        </DataContext.Provider>
    );
}