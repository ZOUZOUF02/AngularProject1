import { Pipe, PipeTransform } from "@angular/core";

@Pipe(
{
    name:'price'
})
export class pricetag implements PipeTransform
{
 transform(n : number) {
    return n.toString() + '$'   
 }
}