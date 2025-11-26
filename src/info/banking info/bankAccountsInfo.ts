export type BankAccount = {
  name: Record<"Geo" | "Eng", string>;
  accountNumber: string;
  bic: string;
  iban: string;
  currencyCode: "GEL";
  routingNumber: string;
  customMessage: string;
  pfp?: string;
};


export const bankAccounts: BankAccount[] = [
  {
    name: { Geo: "ლაშა გაბუნია", Eng: "Lasha Gabunia" },
    accountNumber: "97901391",
    bic: "CKEKGPOEXXX",
    iban: "LB424652806K51F89I68XCB18049",
    currencyCode: "GEL",
    routingNumber: "516231677",
    customMessage: "Requested monthly account summary",
    pfp: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhIQExIQFhUVFRAVFRcVFRAVFQ8VFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHR0rLSstKy0tKy0tLS0tLSsrLS0rLS0tLS0tLS0tKysrLS0tLS0rLS0rKy0rKys3LS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EADsQAAIBAgMGAwYGAQIHAQAAAAABAgMRBCExEkFRYXGBBZGhBhMiscHwFDJCUtHh8WKyIyQzRHOCkxX/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QAJBEBAQACAgMAAgIDAQAAAAAAAAECEQMxBBIhE0EyUQUiYRT/2gAMAwEAAhEDEQA/APMiGB8J+nAAIBgIAAYgQDAVwuAwEFwGAgAdwEADAVwAYCABgILlAMQIBgILgFxiABgIYCAEKwDYCuFwpiAYQAKwBTAVwAYgBg0BiABgIYAFhDABDEAwENgAXEO/IAAO/wAxXAYCCwD+/vIAuANIt9CVuQNdAQAJ9Qy5ggBMGgYIAv1DzC3IYAuwmIks+AC7AAAAXC4+4CDIEHYAvyYBmFuoACC4LsABYLcQAL9AsFwtzAYrhdcgXIAsMVuo7W4gLIB7QAKVhRZJPkiDlyEE2mRVySIySBUiF+RKMuA5JgLuLuCG7cAGnyE7kdonbmgELQTXM04Wg6m0lm0m0kr3HXabUKV+AOLN1HwbEzV40ajXRr5sqr+HVoX26VSNtW4uy7mPyY77Paf2zXEDigVTdc2Gu4W5js2Rs94U9seYO3ATfJlAlxB2EsxqNt5AbQbPMNroJ33DQdugCXNDsgFnwGormJzBZgOwD2Hx+QAKMmKVwg+o5XB+ijz+hLIrV95Yu4IrckWKJGUktQhK+gBKHMafQbpsrULb/MsE2yEZdiza6EZS5EFtGipNK+p7v2YwNOmm4xV0s5O1/PceDoVo3snmrX5No9n4DjdqlOKeaz6o8Pl+/wCnmy5Pa6j0EK9kacPUUspPJ8TzqxiL8PjEfD/HlMts2F477I0ql5UtmErPJJbE9+n6ex8/rUtmTi0002mnuZ9SpYk8t7cYVXhXSd38EndWdlk7cdcz6XheVlc/TJ04srPleQlNImlcba4EHJI+y7n7u28lfkiMHfT5oHR3gNkU+KJRbQ5SATggvbeQk3wJQfG4D278xODG4INq28BxAipXIuErgWAKz4eoA0jFW3k9plUItcH5ou2uRCKpTfAlTa+1YJTRGE76FRY0iDSRPYISpL7ZItSWZGUXxsNXW998yW0BXBNcPUtTvbL5ipUKs3s06c5vN/BFyfks/wDJ0sH7O4uausPWyf6o7HkpWbNeuXcYuePW3L8MwElUqb3KTtbgr/yeo8LwTpy2s9Gnny0MWI9nPEHdRpyisslOCctz0ZkweAxmHqSiqeI3aUqk4Svxsrd0ceXhz5Pp4/4se/ro1IyzcX2fQ877Q+I1lTWxKUfi+Jx1seh//UjtKMlsz0d00r78mrow4qhm3qnmzz8M/HnvKN+Vw45YbwW+wviVV0pe9lJ/F8Dlq1b1Ox7T4hSoW37UdnXv6XPNwrbOjOvT8Pq4jDyqxz2Jfls7zss3Fvgc+XDG835eo8XH81K81Fvf6FytzFPn/gplWV7H0Z9ezaxpCU0Sir70J0VqRT2W+JGNNr+yUct/1ByLsPa4pCZCpfdYIN70/QGylU5FiSe9EroiwE6SX9Etp8SEpreNxvxAe1zAq/D9Rj4bqPvl065XL4RvvXYi0KPKxBOUehW4LgSsVShK+uXDQsS/Fqe4T5BRlb9K7MslJbkTSsyUt+fRmmm1ldfehCUt7FTndq13mjUZy+R7Xwr2plQiqXu47Csls/C8svOxsxHtPTqq3vKlJ724bflnZd7nkaurKz6Ex+Pl3t65YWFX/vav/wA4r5Mvwvs9SveWKxLX+n4HfrmvQ5XhmiPRYZk6U/FcLQhhKqn7yajGUlKo9qUHlazSyztofInjnxb8z7LjcIqtGpSbspRs3lye/LcYcJ4fQp5wpUotqzahBNnzPP8AK4+Cz2m28LlZqV4DwPwTEYmS+CUYZbU5KyS5X17H1XBYWNKEacElFcO2ZClUWSyNvu47N1JdD835Xk5+T/GakXXr28v7R+y0at6lJWqatXSVTXnkzwNejstxlk02muFj7CpHMr+E4epN1p01JyVs9HbJu3HnqdvD/wAjcJrk/TvhyWdvlezvHc6XtJ4cqNadOOUcpRtnZPRZnIjTazun1R9/DKZ4yz9vTKtkiuEGs8n5l0JvevLeEpGlEJ8VYUnyIyklmyNKptaLIaNnOaWo6cr7ibp34ehF0bf0D6JYdN6DUWt787hFtK2YmT6J7b5ffYCFuXzAq6U1ISvk1bhmidGVv0d73RNkZTXFfUfpn4ulJEG+gkKcb5MiouqtNfUsUXwKY0bflk16l1OTWtmUm/2U6d9UQhSSatdZrRviWubZXKok1fiiztMunVq6sqLa2r7lR9GdPlV3vDHkj0eFPM+FvJHpcKZquhKXwSfCMvkedWM5nexLtSqP/RP/AGs+cLHSPjf5Ph/JY68V09pRxXM108SeKoeKW1Ojh/FVxPicni5Tp2+V6etiPgk1rZlylZJcEkux5yp4jFxfn5ZnWpV7pPl9/Q4Xhskia+vIe2E/+Zd/2U/kcKUjX45jFUrTnfK9lfgjn05p5K5+l4MbjxyPTjfmkpNLUhCpfRZcdxOUL6oh7lbrro2doXa7Yv8AaK3h1+1fIlSbW9vqNybDXwoZaN/MbYmZpV3e2nNlk2WtEmURlK+aklyzNMLPemT92SVNKfeR5+TAt2PvIYX6z1oN6OxCnGUf0xfPf6mh2ENpYnCpdZ3XIJT4IruNkUmyEat3km/l5ka1BS3sFGa0kn1X1NTSW1fsgoZrLegp1Ms1nyGqt2upJPqZdOjV1ZUWVdX1ZBn0senyr26/hT06HpsIzy/hL0PT4PcStNuLf/Bq/wDjqf7WfLVWR9M8UqKOHrybSSpVLttJL4XvPiqxL5nj8jj96Y5ad11kQeKSOJPFPiUxqzm9mCcm+tvPgcZ422va3qO9LxDdtZG+HjNb3Xu20srNpu9voeco4OSk/eXdt0c0n9Tp0q0NFl1VhlwYT/r08OF7yQrUNrexxU1knF9VY1OKKnYv/Hp9TpVOKz5aMHMiRc1xQXZlXv8Aclf6dS1or/DxWaunydizSXa5QY3ApSlunfqky/3nImlip0lvSJuT4iuKcks2Do7gZ/xkeIF9WfaLpMyyrO9pXiuSua2VykIWbOg6e5pvnqaGuxhk1wRGeIL6p7ajZOaKZVDFPEmWtjd2ZucdrGXNI6kqxVLEWOT+LWt/MjPGG5xVxy8h3I+LyWtn11JLxyG+L7NHnoVXN2S+ZspYJb3f5HXfpPrnjheS/HocH7TRjpCT8jpx9tZRyVGPeT/g8oqdslbsLYZyvLuvZh4knbu+L+1VetB05uChLWMVrybebOBKVP8Ab2VzLj52su/9ehVhsPOel+t2jWtzdrz5z/b1xm3Xw9v2xXbMtwTtLuvmV4TB7Orcn6L+To4LA53bZ5eXkk/b6XjePlJuwVV8Uur+ZW0W+J/DPk0n9DPGRnHpzz+ZVMLlE8Qlks2X0oyazsvM1piXauvtW+GxTQ+HOUJN8cmbfdi2CzLUS4/Sp4iMst/BqxbJJFLAlaSbEBXX2rfDa4gk6i0urkmuhjw/w5yhK/HJmuGKg8r265GrNdMy77L3K/ahGjZ6egGfq6jPUqGecicmZMS5brG8YxldFVqFU8+Pcr9/s6xfXUhPERZ2mN282WSurFmaSZKrWb0K03vZ2xjy5X6HEWwiQ4xbNMlF2zRfTxck83dcNCr3bI2fAzdVvHPLHptfiK4eqCPiHL1RkVK5OOE6mfTB3nPy1seLpuSbTta3RnQwmJpt2ul98DlQwhojhjlnjjZp34eXkxu7HpqKha+1G3VGihiaT0nDzR5aOFWrv5v5XI+6jJ7MVnybSR5b4uN/b3/+7KT+Lt+LSUpxcWmtndYzKOQsJhdhfwadj7yNSes1HC253dYo4WzvFyRNOov2y9DS6ZFmvbaSJUqmWas/PyFKZEDLWgQqVVFZkzLWwjbupabmrosZy3+l2Hm5Z7NkXbBRGrUX6Yvpl6FtHEXdmpJ81f1LZf0Sm4iceKLZv+kVydzP1UQGBTTJNGeq2bKkLff0M1SJ0jjlKw1WZZnQlRISw52mTz5YVzWK50fwgnhORr3jl+KsCklrcmp30Nqwo3glwHvCcNZoUmaY0+RZRwuzpfuXqiYuTtjwqFR5FsMOaKdEnK0c2c7lXecciEKRbGmUxlKf5VaPF7zbTpWVrvrf6GLudtY/elewiqWFjraz5ZGtw+88w2NxmV0sjIqU1+Wb/wDbM00Kjt8Vr8hNCLaaTlP73kRBYyolJIzwxDk7RV1vbDE4dz/VYVJ1IK2zFrlkbk+Odt22bD5eoOJRHGr9UZR7ZeZri9689yMWVtVsiJSlu9SJVAAVyrxTtcJbFgC2lz8mAPZBxIuCLRDZYw1KyvsxzfoWU8Hvk78loTq4SEt3lqQWHnH8s30Z03NOXrd/WhUVpZDVAeFqS/Wl1X8FsqvD/HTgYrp6zSh0Vb7zIqmWsCGor92S2CutiFHf2JYdylm4266lT2m07FVbDxnqjQ48vLMViStWbZI0JxyhPLg7E416i/NBPnH+C9ga9t9p666XKStf/P8ARXKX3xIiMqYNiMOOqT0SduRcZupldRoeKV9lXb5bjTbkzJgq1JKydnz1Nyd94zn9Jj97qsGi3dd/5Fp/BmNqgACgGIAjNjaziskyvw/Y/M5Jy55W8zaVzoResUalmtMXC720ba5eYGT8FDh8wJqNNWzy8iGyX7HHtxYqkl/X8szpVNmIlKVyIUAMCpsGbFynb4UaQLL9TKbjnYStCP51JS4tZHTp1oy0kn3RXKCeqRnlgYaq66M1bKzjjcXQS7IUvT1fQqpOytrzedgbuY1GznK4gFJ2CgaRiqYpyezBX58DVhcPZZtt9S2ajEz3fiYi1x+2R2OXkZlaqmpRi9UmUrBpZxco9Ga3DeI17VNRJT7viyLYgI0YpSSzGU4mjtK17FnaZWyfGapXlOWzC/U6FGnZWbbZz8PTqU8koyXky9eIL9UZR7XRrPHfTnh/da9jp8hOPX5hQrRnpJcdSUnfJZRXqc9V0+I7PMCd48wGlWr80ujMu5CAqAAAVUahOhoAFrn+wwEBGwAAVYAADKgox35QA1j258n8VXg2j6nSABys8PQLF+roIDnHbJX+kqADaQAAAAwAJQyFfQAOmLGTl4f/AKi7ndn+Xy+gATPtcEAADDb/2Q=="

  },
  {
    name: { Geo: "მარიამ ქობულაძე", Eng: "Mariam Kobuladze" },
    accountNumber: "40076967",
    bic: "HLUFBL2GW3A",
    iban: "SE1200200903006061503049",
    currencyCode: "GEL",
    routingNumber: "445075069",
    customMessage: "Asked to update contact information"
  },
  {
    name: { Geo: "მიხეილ ბარამიძე", Eng: "Mikheil Baramidze" },
    accountNumber: "57905895",
    bic: "LDXUHKEJNXD",
    iban: "GR56770767373T8A407B3937U37",
    currencyCode: "GEL",
    routingNumber: "135508736",
    customMessage: "Inquired about international transfer limits"
  },
  {
    name: { Geo: "გიორგი სიხარულიძე", Eng: "Giorgi Sikharulidze" },
    accountNumber: "97640298",
    bic: "OZBEKM4Q",
    iban: "TN0205007701500100050082",
    currencyCode: "GEL",
    routingNumber: "259821221",
    customMessage: "Waiting for new card issuance"
  },
  {
    name: { Geo: "ზურა არჩვაძე", Eng: "Zura Archvadze" },
    accountNumber: "55945308",
    bic: "HGSUMUDF",
    iban: "SK9675100090170706001045",
    currencyCode: "GEL",
    routingNumber: "202171193",
    customMessage: "Requested SMS alert activation"
  },
  {
    name: { Geo: "თეონა ყიფიანი", Eng: "Teona Qifiani" },
    accountNumber: "39087224",
    bic: "QZVXCDR0XXX",
    iban: "BH97BMVP5395357R203627",
    currencyCode: "GEL",
    routingNumber: "032081194",
    customMessage: "Asked about loan repayment schedule"
  },
  {
    name: { Geo: "სანდრო მაღლაკელიძე", Eng: "Sandro Maglakelidze" },
    accountNumber: "55896230",
    bic: "TNUTTV5X",
    iban: "ME09003699501921048336",
    currencyCode: "GEL",
    routingNumber: "013101653",
    customMessage: "Reported suspicious account activity"
  },
  {
    name: { Geo: "თაკო ბერიშვილი", Eng: "Tako Berishvili" },
    accountNumber: "04998304",
    bic: "CINDTMTJAXC",
    iban: "LU248289L5724P0P48I8",
    currencyCode: "GEL",
    routingNumber: "551175604",
    customMessage: "Requested ATM withdrawal limit increase"
  },
  {
    name: { Geo: "ბექა თავართქილაძე", Eng: "Beka Tavartkiladze" },
    accountNumber: "04063950",
    bic: "ZUJGWS2L",
    iban: "HR2924306670179024332",
    currencyCode: "GEL",
    routingNumber: "045316542",
    customMessage: "Asked to enable online banking access"
  },
  {
    name: { Geo: "ლიკა ხვედელიძე", Eng: "Lika Khvedelidze" },
    accountNumber: "94661240",
    bic: "FUAWUYWSXXX",
    iban: "LV13HAGHO8E0040086772",
    currencyCode: "GEL",
    routingNumber: "012888061",
    customMessage: "Requested statement for visa application"
  },

  {
    name: { Geo: "ირაკლი ავალიანი", Eng: "Irakli Avaliani" },
    accountNumber: "51154934",
    bic: "WPVIBWWJXXX",
    iban: "JO06GFCL0053003800260015400266",
    currencyCode: "GEL",
    routingNumber: "165197120",
    customMessage: "Asked about fixed deposit options"
  },
  {
    name: { Geo: "ნინო დვალიშვილი", Eng: "Nino Dvalishvili" },
    accountNumber: "58770333",
    bic: "CVJNADVM",
    iban: "TR390630067670772207756094",
    currencyCode: "GEL",
    routingNumber: "913955491",
    customMessage: "Requested assistance with mobile banking"
  },
  {
    name: { Geo: "გიგა რატიშვილი", Eng: "Giga Ratishvili" },
    accountNumber: "62995658",
    bic: "LJXALU5KXXX",
    iban: "CH3200478S61L592227L0",
    currencyCode: "GEL",
    routingNumber: "542773248",
    customMessage: "Submitted request for loan early repayment"
  },
  {
    name: { Geo: "ანა თევზაძე", Eng: "Ana Tevzadze" },
    accountNumber: "25081357",
    bic: "NXOFVIQS",
    iban: "FO0707149005014186",
    currencyCode: "GEL",
    routingNumber: "836477399",
    customMessage: "Asked about card delivery timeline"
  },
  {
    name: { Geo: "ლევან კუპატაძე", Eng: "Levan Kupatadze" },
    accountNumber: "24886601",
    bic: "CPARBALG",
    iban: "LT190019737444409799",
    currencyCode: "GEL",
    routingNumber: "670176607",
    customMessage: "Requested fee structure clarification"
  },
  {
    name: { Geo: "ხატია გოგიბერიძე", Eng: "Khatia Gogiberidze" },
    accountNumber: "51029798",
    bic: "NXSDBE5M",
    iban: "CZ1269977095260028128329",
    currencyCode: "GEL",
    routingNumber: "275537913",
    customMessage: "Asked to update residential address"
  },
  {
    name: { Geo: "ვალერი ჯაფარიძე", Eng: "Valeri Japaridze" },
    accountNumber: "94052980",
    bic: "SMXQAM5IBVU",
    iban: "ES9752840015235940090895",
    currencyCode: "GEL",
    routingNumber: "396210423",
    customMessage: "Requested increase in credit limit"
  },
  {
    name: { Geo: "ქეთი ბერიძე", Eng: "Keti Beridze" },
    accountNumber: "31186149",
    bic: "EELSCF8V",
    iban: "LU39330264515Z859950",
    currencyCode: "GEL",
    routingNumber: "010048337",
    customMessage: "Reported lost banking token"
  },
  {
    name: { Geo: "გიორგი კუჭავა", Eng: "Giorgi Kuchava" },
    accountNumber: "61994718",
    bic: "QQRBKNB0XXX",
    iban: "GL6840644100391004",
    currencyCode: "GEL",
    routingNumber: "507248116",
    customMessage: "Asked to disable contactless payments"
  },
  {
    name: { Geo: "ლელა ქავთარაძე", Eng: "Lela Kavtaradze" },
    accountNumber: "05668731",
    bic: "AWNYSLG0XXX",
    iban: "MD696496A48866P25R381727",
    currencyCode: "GEL",
    routingNumber: "458330283",
    customMessage: "Requested proof of account ownership"
  },

  {
    name: { Geo: "საბა კუპრაძე", Eng: "Saba Kupradze" },
    accountNumber: "43970712",
    bic: "FOFHBYHDXXX",
    iban: "AD0900966003297538497419",
    currencyCode: "GEL",
    routingNumber: "142945447",
    customMessage: "Asked to activate travel insurance"
  },
  {
    name: { Geo: "მაია ლომიძე", Eng: "Maia Lomidze" },
    accountNumber: "37310647",
    bic: "FWPVREYM",
    iban: "GE43PY0079009308130020",
    currencyCode: "GEL",
    routingNumber: "983754457",
    customMessage: "Requested balance certificate"
  },
  {
    name: { Geo: "ირაკლი აბაშიძე", Eng: "Irakli Abashidze" },
    accountNumber: "22708552",
    bic: "JXCXSEL3",
    iban: "QA07ZUEZ690553245882Z9I7627Z4",
    currencyCode: "GEL",
    routingNumber: "092827851",
    customMessage: "Asked to unlock online banking"
  },
  {
    name: { Geo: "გვანცა ბახტაძე", Eng: "Gvantsa Bakhtadze" },
    accountNumber: "70773471",
    bic: "SPPKETP2",
    iban: "AL5978210043W52126I44843624I",
    currencyCode: "GEL",
    routingNumber: "678544749",
    customMessage: "Requested transaction verification"
  },
  {
    name: { Geo: "ნიკო მხეიძე", Eng: "Niko Mkheidze" },
    accountNumber: "16911419",
    bic: "PWTZLBXHUH2",
    iban: "MD358X01T959W7E6O04W0CL5",
    currencyCode: "GEL",
    routingNumber: "886451899",
    customMessage: "Inquired about account closure process"
  },
  {
    name: { Geo: "თამუნა ქურიძე", Eng: "Tamuna Quridze" },
    accountNumber: "83428646",
    bic: "BKKNLV6W",
    iban: "AE312211007100290216003",
    currencyCode: "GEL",
    routingNumber: "194928454",
    customMessage: "Requested IBAN confirmation"
  },
  {
    name: { Geo: "დავით დოლიძე", Eng: "David Dolidze" },
    accountNumber: "03194653",
    bic: "WGQLEEESXXX",
    iban: "IL340060600082080380628",
    currencyCode: "GEL",
    routingNumber: "459424693",
    customMessage: "Asked to freeze the account temporarily"
  },
  {
    name: { Geo: "გიორგი ზვიადაძე", Eng: "Giorgi Zviadadze" },
    accountNumber: "32002449",
    bic: "IOUTCIWCXXX",
    iban: "CR45516470072430060061",
    currencyCode: "GEL",
    routingNumber: "365611516",
    customMessage: "Requested change in notification preferences"
  },
  {
    name: { Geo: "ქეთა მაჭავარიანი", Eng: "Keta Machavariani" },
    accountNumber: "51871949",
    bic: "IMSENLCTUUJ",
    iban: "RO79RLMP1528RQ149Y61654L",
    currencyCode: "GEL",
    routingNumber: "508374542",
    customMessage: "Asked about loan refinancing options"
  },
  {
    name: { Geo: "ირაკლი უგულავა", Eng: "Irakli Ugulava" },
    accountNumber: "30490011",
    bic: "KTCCMWL1",
    iban: "SE5101620000730754006001",
    currencyCode: "GEL",
    routingNumber: "049314595",
    customMessage: "Requested copy of last 6 months statements"
  }
];
