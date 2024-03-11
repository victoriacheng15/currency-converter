import { ref, computed } from "vue";
import { BASE_URL, API_KEY } from "../utils";
import { currencies as currencyList } from "../utils";

export function useFetchRate() {
  const base = ref("CAD");
  const currencies = ref<string[]>([]);
  const exchangeRate = ref<Record<string, string>>({});
  const errorMsg = ref("");
  const enterAmount = ref(100);

  const filterCurrencyList = computed(() =>
    currencyList.filter(({ code }) => code !== base.value),
  );

  const getExchangeRate = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}?base_currency=${base.value}&currencies=${currencies.value}`,
        {
          headers: {
            apikey: `${API_KEY}`,
          },
        },
      );
      const data = await response.json();

      if (response.ok) {
        exchangeRate.value = data.data;
      } else {
        errorMsg.value = `Error: ${data.message}`;
      }
    } catch (error) {
      errorMsg.value = "An error occurred while fetching data.";
      console.log(error);
    }
  };

  function displayExchangeRate(currency: string) {
    const calculatedValue =
      enterAmount.value * Number(exchangeRate.value[currency]);
    return Math.floor(calculatedValue * 100) / 100;
  }

  return {
    base,
    currencies,
    exchangeRate,
    errorMsg,
    currencyList,
    filterCurrencyList,
    getExchangeRate,
    enterAmount,
    displayExchangeRate,
  };
}
