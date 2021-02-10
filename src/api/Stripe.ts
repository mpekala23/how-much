import { API_URL } from "./Common";

export async function getTransactionSecret(amount: number): Promise<string> {
  const secret = await fetch(
    `${API_URL}stripeSecret?amount=${Math.floor(amount) * 100}`
  );
  const clean = await secret.json();
  if (!clean.secret) {
    throw Error(clean.message || "No secret found");
  }
  return clean.secret;
}

export async function confirmTransaction() {}
