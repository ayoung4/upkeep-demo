import { WorkOrder } from '../constants';
import { get } from '../request';

type UpkeepGetWorkordersResponse = {
    success: boolean;
    results: WorkOrder[];
    message: string;
};

type GetWorkorders = (sessionToken: string) =>
    Promise<UpkeepGetWorkordersResponse>;

export const getWorkorders: GetWorkorders = (sessionToken: string) =>
    get(
        'https://api.onupkeep.com/api/v2/work-orders',
        { 'Session-Token': sessionToken },
    );