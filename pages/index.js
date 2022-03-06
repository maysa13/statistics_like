import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainPage from '../pages/mainpage/mainpage'
import ContextProvider from '../store/ProviderComposer'
import 'antd/dist/antd.css';

export default function Home() {
  return (
    <ContextProvider>
      <MainPage/>
    </ContextProvider>
  )
}
