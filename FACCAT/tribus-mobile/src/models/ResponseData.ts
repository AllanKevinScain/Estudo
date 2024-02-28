export type ResponseData<T> = {
    success: boolean,
    status: number,
    data: T,
    messages: [
        {
            title: string,
            message: string
        }
    ]
}