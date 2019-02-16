export class Currency{
	id:string;
	symbol:string;
	name:string;
	current_price?:number;
	price_change_percentage_24h?:number;
	market_data:{
		current_price:{
			usd:number;
		}
	}
}