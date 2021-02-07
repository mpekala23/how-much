import { API_URL } from "./Common";

export async function getTransactionSecret(amount: number): Promise<string> {
  const secret = await fetch(`${API_URL}stripeSecret?amount=${amount}`);
  const clean = await secret.json();
  return clean.secret;
}

export async function confirmTransaction() {}
