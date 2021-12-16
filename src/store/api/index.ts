export const fetchTransactionsDetails=async()=>
{
const res = await fetch(" https://snkajst53g.execute-api.us-east-2.amazonaws.com/default/sellertransactions");
  if (!res.ok) return [];
  const data = await res.json();
  return data.Items;
}
export const fetchMatchesDetails=async()=>
{
  const res = await fetch("https://omshxe9c85.execute-api.us-east-2.amazonaws.com/default/sellermatches");
  if (!res.ok) return [];
  const data = await res.json();
  return data.Items;
}