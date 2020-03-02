const sharedSettings: Partial<RequestInit> = {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
};

export const post = (url: string, body: object = {}, headers: object = {}) =>
    fetch(url, {
        ...sharedSettings,
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
        .then((res) => res.json());

export const get = (url: string, headers: object = {}) =>
    fetch(url, {
        ...sharedSettings,
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json());