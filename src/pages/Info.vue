<template>
  <div
    class="wrapper shadow-lg bg-white h-full flex-1 my-4 p-8 gap-4 flex flex-col"
  >
    <p class="font-semibold">
      Nasze ciało składa się w około 70 procentach z wody, którą szybko tracimy
      szczególnie latem. Jak zatem dbać o odpowiednie nawodnienie i dlaczego
      jest to tak ważne?
    </p>
    <p>
      Woda jest niezbędna do prawidłowego funkcjonowania wszystkich komórek
      naszego ciała. Nasz organizm bez wody potrafi przeżyć zaledwie kilka dni.
      Dlatego tak ważne jest jej regularne picie. Tracimy wodę, oddychając,
      pocąc się czy oddając mocz. Jej zawartość w naszym organizmie zmniejsza
      się także wraz z upływem lat.
    </p>
    <p class="font-semibold">Ile wody dziennie ?</p>
    <p>
      Przyjmuje się, że na jeden kilogram masy ciała, powinno się wypijać około
      0,02 litra wody. Jednak zapotrzebowanie na wodę zależy tak naprawdę od
      wielu czynników. Zdrowy, dorosły człowiek powinien wypijać od 1,5 do 2
      litrów wody – w zależności od płci, temperatury otoczenia i aktywności
      fizycznej. A w czasie intensywnego wysiłku i upałów nawet do 4–5 litrów na
      dobę.
    </p>
    <RouterLink to="/">
      <p class="font-semibold text-blue-600">
        Skorzystaj z Kalkulatora zapotrzebowania na wodę.
      </p>
    </RouterLink>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.wrapper {
  width: min(70rem, 100%);
  margin-inline: auto;
  gap: 1.5rem;
}
</style>
