export interface botAuth {
        Login(): Promise<any>
}

export type botAuthType = {
        code: string
}