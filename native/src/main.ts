/// <reference path="./@types/entities.d.ts" />

import { Header } from './components/header.ts'
import SendWrapper from './components/send-wrapper.ts'
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

const header = new Header('schedule viewer')

const sendWrapperComponent = SendWrapper()

const headerComponent = header.initHeader()

app?.append(headerComponent)

app?.append(sendWrapperComponent)
