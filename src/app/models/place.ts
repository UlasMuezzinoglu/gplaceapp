import { Result } from "./result"

export interface Place{
    results : Result[]
    status: string
    next_page_token : string
}