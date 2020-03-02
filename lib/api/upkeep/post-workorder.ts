import { WorkOrder } from '../constants';
import { post } from '../request';

type UpkeepPostWorkorderResponse = {
    success: boolean;
    result: WorkOrder;
    message: string;
};

type PostWorkorder = (sessionToken: string, data: object) =>
    Promise<UpkeepPostWorkorderResponse>;

export const postWorkorder: PostWorkorder = (sessionToken) =>
    post(
        'https://api.onupkeep.com/api/v2/work-orders/',
        { title: '1234' },
        { 'Session-Token': sessionToken },
    );
