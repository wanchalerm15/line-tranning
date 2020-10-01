import { Injectable } from "@nestjs/common";
import { Client } from '@line/bot-sdk';

@Injectable()
export class LineSdkService {
    client = new Client({
        channelAccessToken: 'L1Sn/3eITzavTxQgfosB1BGJPSprznaGCrII1mK8XYPjj+TAJd+JQo5hqhy1abB6s3Fqll4/SIWtHh8uX634KqR5i6oJ82cE33H1eih5VoDdJ2gIyd8A25O5g0JJOGp9/bxtEXh9Sjt3lbUBSQGFAwdB04t89/1O/w1cDnyilFU=',
        channelSecret: 'U126adf605f9aa4a6acf7e1a8c73d0cf0'
    });
}