import { API_URL } from "./Common";

export async function getTransactionSecret(): Promise<string> {
  const secret = await fetch(`${API_URL}stripeSecret`);
  const clean = await secret.json();
  return clean.secret;
}

export async function confirmTransaction() {}
