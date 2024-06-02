
const collerData = [
    {
        id: 1,
        tag: 'Flat 7.5% Instant Bank Discount',
        itemImage: 'https://www.reliancedigital.in/medias/Havells-GHRACAAD008-Air-Cooler-492664512-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTU0NHxpbWFnZS9qcGVnfGltYWdlcy9oYzEvaDkzLzk5NjMwMTc1MDI3NTAuanBnfDA5YTk2N2I1MjY2MmYzYmU3MzhiODhiODUwNzcxZTNmYmU4MGY4MGQ1MWNjODhhMjQxZDBmOGEzZGQ3YzJmMmU',
        description: "Havells Kalt GHRACAAD Personal Air Cooler with 24 Li9tre Capacity",
        offerPrice: 6133.00,
        mrp: 8790.00,

    },
    {
        id: 2,
        tag: 'Flat 7.5% Instant Bank Discount',
        itemImage: 'https://www.reliancedigital.in/medias/Maharaja-Air-Cooler-490819365-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNDgxMHxpbWFnZS9qcGVnfGltYWdlcy9oMmYvaGJkLzEwMTI0NzA4OTcwNTI2LmpwZ3wyNDM4ZmRjNmQ1NWY0MTgxYjBlYmI0N2ZjYjI3NWIyMDMxMWU5ODY3YmM0MjA5ODYwOTQ2NzA3ZDQ0M2MxYWQz',
        description: "Havells Kalt GHRACAAD Personal Air Cooler with 24 Li9tre Capacity",
        offerPrice: 1250.00,
        mrp: 9857.00,

    },
    {
        id: 3,
        tag: 'Flat 7.5% Instant Bank Discount',
        itemImage: 'https://www.reliancedigital.in/medias/Symphony-75XL-Air-Cooler-491666297-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTYxMXxpbWFnZS9qcGVnfGltYWdlcy9oYzMvaDAzLzk5NjgzODg5NjQzODIuanBnfDc2YjAwNjgwMzc3OTY5NTk4NzM2ZmRjMjRkNWNkMjQyMDgzNDBmY2NkNzEzOTY4MTMyMjJkYTg4YzJlNWZlMGI',
        description: "Maharaja Whiteline Rambo AC-303 65 Litre Desrt Air Cooler",
        offerPrice: 6133.00,
        mrp: 8790.00,

    },
    {
        id: 4,
        tag: 'Flat 7.5% Instant Bank Discount',
        itemImage: 'https://www.reliancedigital.in/medias/Havells-GHRACAAD008-Air-Cooler-492664512-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTU0NHxpbWFnZS9qcGVnfGltYWdlcy9oYzEvaDkzLzk5NjMwMTc1MDI3NTAuanBnfDA5YTk2N2I1MjY2MmYzYmU3MzhiODhiODUwNzcxZTNmYmU4MGY4MGQ1MWNjODhhMjQxZDBmOGEzZGQ3YzJmMmU',
        description: "Symphony Sumo 75xl Desert Air Cooler with -Pure technology, 75 Litres",
        offerPrice: 7575.00,
        mrp: 11045.00,

    },
    {
        id: 5,
        tag: 'Flat 7.5% Instant Bank Discount',
        itemImage: 'https://www.reliancedigital.in/medias/Bajaj-Air-Cooler-494338771-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTA2M3xpbWFnZS9qcGVnfGltYWdlcy9oNzEvaDI1LzEwMTA4NzA2MDk1MTM0LmpwZ3xlOWZmZGI4ZDZiZDZhNjAzYWY3NjA1MjBlMGVlMzAzM2EzNTNhOTMxZTI2YzY5MDQ0ZjRhMDE4MmRhZTg2Y2Y2',
        description: "Bajaj Shield Series Elevate 65 Desert Air Cooler ",
        offerPrice: 1124.00,
        mrp: 5727.00,

    },
    {
        id: 6,
        tag: 'Flat 7.5% Instant Bank Discount',
        itemImage: 'https://www.reliancedigital.in/medias/Havells-Kace-75-Cooler-493692107-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTMwNHxpbWFnZS9qcGVnfGltYWdlcy9oMmIvaDQ0Lzk5NjMwMTc4MzA0MzAuanBnfDY1N2NhZTU4YTZhMzg4ZjJlNmVkYWIwY2IxZjJkZGViYmE1ZTc3MTYxMmU0MzVkMmRhNTdmOTk5M2ZmMmFmNTA',
        description: "Havells Kace 75 GHRACAMF220 NDesert Air Cooler with 75 Liters Capacity, white",
        offerPrice: 12000.00,
        mrp: 12100.00,

    },
    {
        id: 7,
        tag: 'Flat 7.5% Instant Bank Discount',
        itemImage: 'https://www.reliancedigital.in/medias/Havells-Air-Cooler-494338763-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTEyN3xpbWFnZS9qcGVnfGltYWdlcy9oM2QvaGJjLzEwMTA4NzAzMDgwNDc4LmpwZ3w3NjE1ZTY2ZjQ3YzkyOTY1MTJkODI5ZmFkNzY1OGEzYzA5OTA4MTJkNzMyNjA2NjE4ODRiNGI2ODZiMmYyYjg4',
        description: "Havells Zurii 55 tower Air Cooler",
        offerPrice: 9852.00,
        mrp: 10961.00,

    },
    {
        id: 8,
        tag: 'Flat 7.5% Instant Bank Discount',
        itemImage: 'https://www.reliancedigital.in/medias/Havells-GHRACAAD008-Air-Cooler-492664512-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTU0NHxpbWFnZS9qcGVnfGltYWdlcy9oYzEvaDkzLzk5NjMwMTc1MDI3NTAuanBnfDA5YTk2N2I1MjY2MmYzYmU3MzhiODhiODUwNzcxZTNmYmU4MGY4MGQ1MWNjODhhMjQxZDBmOGEzZGQ3YzJmMmU',
        description: "Kenstar Wondercool Desert 60L Air Cooler, HC 60",
        offerPrice: 5112.00,
        mrp: 7851.00,

    },
    {
        id: 9,
        tag: 'Flat 7.5% Instant Bank Discount',
        itemImage: 'https://www.reliancedigital.in/medias/Kenstar-Wondercool-Desert-Air-Cooler-494338812-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNzQ2MXxpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGViLzEwMTEwNzg1ODE0NTU4LmpwZ3w4YmYwZDg5MDY5MjA0YTYxOTMzODk0NDRhMWRlNWYyM2QzZWIyOWZjMjhiOWE3MzUzOTczYWU3MTE1NWMyZGFj',
        description: "Maharaja White line Rambo AC 303 65Liters Desert Air Cooler",
        offerPrice: 4525.00,
        mrp: 7845.00,

    },
    {
        id: 10,
        tag: 'Flat 7.5% Instant Bank Discount',
        itemImage: 'https://www.reliancedigital.in/medias/Maharaja-Air-Cooler-490819365-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNDgxMHxpbWFnZS9qcGVnfGltYWdlcy9oMmYvaGJkLzEwMTI0NzA4OTcwNTI2LmpwZ3wyNDM4ZmRjNmQ1NWY0MTgxYjBlYmI0N2ZjYjI3NWIyMDMxMWU5ODY3YmM0MjA5ODYwOTQ2NzA3ZDQ0M2MxYWQz',
        description: "Havells Kalt GHRACAAD Personal Air Cooler with 24 Li9tre Capacity",
        offerPrice: 5646.00,
        mrp: 9000.00,

    },
]
const acData = [
    {
        id: 1,
        tag: '6 Month No Cost EMI',
        itemImage: 'https://www.reliancedigital.in/medias/Samsung-WindFree-Inverter-Split-Air-Conditioner-581110398-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDM0NHxpbWFnZS9qcGVnfGltYWdlcy9oYjkvaDRlLzEwMDk4NjA5NDg3OTAyLmpwZ3xiNTBkMjQ2Njg1ZmY5NTFjMzQ2NmNhNGE4MmU1NjdiMjQ3ZWQyOTI5OWVlYTk5NzY3MDNmMTViN2E1NWFkZTA0',
        description: "Bluestar 1.5 ton 5 star 5 in 1 convertible inverter split AC, iC518nnurs, 4way",
        offerPrice: 6133.00,
        mrp: 8790.00,

    },
    {
        id: 2,
        tag: '6 Month No Cost EMI',
        itemImage: 'https://www.reliancedigital.in/medias/Bluestar-IC518RNU-Air-Conditioner-581110409-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzI2NnxpbWFnZS9qcGVnfGltYWdlcy9oMDMvaGM1Lzk5NjgzMjI2MDkxODIuanBnfGYyZDlhMzMyNTFlODg4NzBmYWU4NmQ3NTMzZWQ3N2ZiMmU3YWUxYTQ0MzAzZGU3MWQyMThjMDVjZTg0Y2Q0ZTk',
        description: "BLUESTSR 1.5 ton 3 star 5 in 1 convertible inverter split AC",
        offerPrice: 1250.00,
        mrp: 9857.00,

    },
    {
        id: 3,
        tag: '6 Month No Cost EMI',
        itemImage: 'https://www.reliancedigital.in/medias/BLUESTAR-IC318MNU-Split-Air-conditioner-581110331-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODkxOHxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGNmLzk5NjUzNTkwNzEyNjIuanBnfDAxNzkwMDUxMGQyYjUzYjkwNmZiMTcxYjA2ZGQwNmNkMzc0ZjU0NWE0YTU4ZWU1ZDJkNmJlZDNkZWE5NjU1Y2M',
        description: "hitachi 1.5 ton 3 star inverter split Ac, frost wash hexa sensor",
        offerPrice: 6133.00,
        mrp: 8790.00,

    },
    {
        id: 4,
        tag: '6 Month No Cost EMI',
        itemImage: 'https://www.reliancedigital.in/medias/BLUESTAR-IC318MNU-Split-Air-conditioner-581110331-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODkxOHxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGNmLzk5NjUzNTkwNzEyNjIuanBnfDAxNzkwMDUxMGQyYjUzYjkwNmZiMTcxYjA2ZGQwNmNkMzc0ZjU0NWE0YTU4ZWU1ZDJkNmJlZDNkZWE5NjU1Y2M',
        description: "hitachi 1.5 ton 5 star inverter split AC, frost wash sperfin mesh",
        offerPrice: 7575.00,
        mrp: 11045.00,

    },
    {
        id: 5,
        tag: '6 Month No Cost EMI',
        itemImage: 'https://www.reliancedigital.in/medias/BLUESTAR-IC318MNU-Split-Air-conditioner-581110331-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODkxOHxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGNmLzk5NjUzNTkwNzEyNjIuanBnfDAxNzkwMDUxMGQyYjUzYjkwNmZiMTcxYjA2ZGQwNmNkMzc0ZjU0NWE0YTU4ZWU1ZDJkNmJlZDNkZWE5NjU1Y2M',
        description: "gangnam 1.5 ton 3 star inverter split AC, 5 in 1 convertible, hydrophilic blue fin,",
        offerPrice: 1124.00,
        mrp: 5727.00,

    },
    {
        id: 6,
        tag: '6 Month No Cost EMI',
        itemImage: 'https://www.reliancedigital.in/medias/BLUESTAR-IC318MNU-Split-Air-conditioner-581110331-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODkxOHxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGNmLzk5NjUzNTkwNzEyNjIuanBnfDAxNzkwMDUxMGQyYjUzYjkwNmZiMTcxYjA2ZGQwNmNkMzc0ZjU0NWE0YTU4ZWU1ZDJkNmJlZDNkZWE5NjU1Y2M',
        description: "SUMSUNG 1.5 ton 3 star 5 in 1 convertible inverter split AC",
        offerPrice: 12000.00,
        mrp: 12100.00,

    },
    {
        id: 7,
        tag: '6 Month No Cost EMI',
        itemImage: 'https://www.reliancedigital.in/medias/BLUESTAR-IC318MNU-Split-Air-conditioner-581110331-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODkxOHxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGNmLzk5NjUzNTkwNzEyNjIuanBnfDAxNzkwMDUxMGQyYjUzYjkwNmZiMTcxYjA2ZGQwNmNkMzc0ZjU0NWE0YTU4ZWU1ZDJkNmJlZDNkZWE5NjU1Y2M',
        description: "SAMSUNG 1.5 ton 5 sta wifi inverter split AC, AR18CY5AMWK windfree",
        offerPrice: 9852.00,
        mrp: 10961.00,

    },
    {
        id: 8,
        tag: '6 Month No Cost EMI',
        itemImage: 'https://www.reliancedigital.in/medias/BLUESTAR-IC318MNU-Split-Air-conditioner-581110331-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODkxOHxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGNmLzk5NjUzNTkwNzEyNjIuanBnfDAxNzkwMDUxMGQyYjUzYjkwNmZiMTcxYjA2ZGQwNmNkMzc0ZjU0NWE0YTU4ZWU1ZDJkNmJlZDNkZWE5NjU1Y2M',
        description: "SAMSUNG 1.5 ton 3 star wifi inverter split ACn windfree",
        offerPrice: 5112.00,
        mrp: 7851.00,

    },
    {
        id: 9,
        tag: '6 Month No Cost EMI',
        itemImage: 'https://www.reliancedigital.in/medias/BLUESTAR-IC318MNU-Split-Air-conditioner-581110331-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODkxOHxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGNmLzk5NjUzNTkwNzEyNjIuanBnfDAxNzkwMDUxMGQyYjUzYjkwNmZiMTcxYjA2ZGQwNmNkMzc0ZjU0NWE0YTU4ZWU1ZDJkNmJlZDNkZWE5NjU1Y2M',
        description: "SAMSUNG 1.5 ton 5 star 5 in 1 convertible inverter split AC",
        offerPrice: 4525.00,
        mrp: 7845.00,

    },
    {
        id: 10,
        tag: '6 Month No Cost EMI',
        itemImage: 'https://www.reliancedigital.in/medias/Gangnam-Inverter-Split-AC-581110668-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNzcwMHxpbWFnZS9qcGVnfGltYWdlcy9oNjYvaDI4LzEwMTExNDczNjE0ODc4LmpwZ3wzZTA5YWVkZDYzMmYxNGFlOTdhZjQxNzU4MGU5MDJiZTJmYmI1MmRmYTg2MDFiNzU5NzY4NzY1NjFlOGQ4ODc5',
        description: "bluesttar 1.5 ton 5 star 5 in 1 convertible inverter split AC IC518RNU 100 percent",
        offerPrice: 5646.00,
        mrp: 9000.00,

    },
]
const mobileData = [
    {
        id: 1,
        tag: '',
        itemImage: 'https://www.reliancedigital.in/medias/Apple-iPad-Air-494404974-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MTMwMHxpbWFnZS9qcGVnfGltYWdlcy9oNTQvaGRkLzEwMTQyNzY3MjUxNDg2LmpwZ3w3MTAxN2NkYWU4ZTkxY2NlMTcyZWRhMTdkNTZmNWFhYmRkMTg2OGMxYWU3OGYyMGQxM2IxZjhmNGQ2NGY0MWVh',
        description: "apple ipad air 1st gen 2024 32.78 cm (13 inch) wi-fi tablet, 128 GB blue",
        offerPrice: 79900.00,
        mrp: 100000.00,

    },
    {
        id: 2,
        tag: 'Rs.4000 Instant Discount on ICICI & SBI Cards',
        itemImage: 'https://www.reliancedigital.in/medias/iPad-Air-5thGen-WiFi-Starlight-PDP-Image-492849483-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjQ1MHxpbWFnZS9qcGVnfGltYWdlcy9oMzMvaDA5LzEwMDE1MTM2MjUxOTM0LmpwZ3w3YWQ0ODFhYWZjZTI0ZDYyZmVjZjcyZDk2ZDI3MWI4NDNiN2MyYjc5YWIwNjE5ZjM5ZDU0MmZkYWJiNjIwZGRl',
        description: "apple ipad air 5th gen 2022 27.69 cm (10.9 inch) wi-fi tablet 64 GB",
        offerPrice: 54900.00,
        mrp: 599000.00,

    },
    {
        id: 3,
        tag: '',
        itemImage: 'https://www.reliancedigital.in/medias/OnePlus-Pad-Go-8-GB-RAM-128-GB-Twin-Mint-LTE-Tablet-494268172-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjg0OXxpbWFnZS9qcGVnfGltYWdlcy9oNjAvaDMzLzEwMDY3NjU0NTA4NTc0LmpwZ3w5MWVmOTQ1ZWY0OGRhZmM2MjE0ZDEzMWQzZGM1YTc3YmY2MzM5ZTk3YjcyZTVkNDQzMTg4MDc5MGZjMWRhNGJl',
        description: "one plus pad go 28.82 cm (11.35 inches) 8GB RAM, 128 GN, twin mint, LTE tablet",
        offerPrice: 21999.00,
        mrp: 30990.00,

    },
    {
        id: 4,
        tag: 'Rs.3000 Instant Discount on ICICI & SBI Cards',
        itemImage: 'https://www.reliancedigital.in/medias/iPad-10thGen-Wi-Fi-Silver-493178823-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMzExM3xpbWFnZS9qcGVnfGltYWdlcy9oNzUvaDVjLzEwMDE1NTE3Mjc4MjM4LmpwZ3wwZTRlZGUyOTBmYzUxMDIzM2E3MDY1MjZhNWQ4NGM0ODc3NjZiZWY5Mjk3MDA4YTExOThhZDdjZGU3OWM2N2Jk',
        description: "apple ipad 10th gen (2022) 29.69 cm (10.9 inch) wi-fi tablet, 64 GB Silver",
        offerPrice: 33900.00,
        mrp: 39900.00,

    },
    {
        id: 5,
        tag: '6 Month No Cost EMI',
        itemImage: "https://www.reliancedigital.in/medias/Samsung-Tab-A9-Plus-494268075-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjE5OHxpbWFnZS9qcGVnfGltYWdlcy9oNmQvaDMwLzEwMDU5NjY5NjY3ODcwLmpwZ3xiNmY2NjQ5YTAxYWI1OTQxMTAyNGE0ZThlY2VlN2NlMGQ1Yzg5ZTQzYjVhNDhlNWFkMTc0MmQzNGRjNTE2Yzc3",
        description: "samsung galaxy 27.94 cm (11.0 inch) wi-fi + cellular tablet 128 GB 8GB silver",
        offerPrice: 24999.00,
        mrp: 32999.00,

    },
 
    {
        id: 6,
        tag: '',
        itemImage: 'https://www.reliancedigital.in/medias/Apple-iPad-Air-494404974-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MTMwMHxpbWFnZS9qcGVnfGltYWdlcy9oNTQvaGRkLzEwMTQyNzY3MjUxNDg2LmpwZ3w3MTAxN2NkYWU4ZTkxY2NlMTcyZWRhMTdkNTZmNWFhYmRkMTg2OGMxYWU3OGYyMGQxM2IxZjhmNGQ2NGY0MWVh',
        description: "apple ipad air 1st gen 2024 32.78 cm (13 inch) wi-fi tablet, 128 GB blue",
        offerPrice: 79900.00,
        mrp: 100000.00,

    },
    {
        id: 7,
        tag: 'Rs.4000 Instant Discount on ICICI & SBI Cards',
        itemImage: 'https://www.reliancedigital.in/medias/iPad-Air-5thGen-WiFi-Starlight-PDP-Image-492849483-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjQ1MHxpbWFnZS9qcGVnfGltYWdlcy9oMzMvaDA5LzEwMDE1MTM2MjUxOTM0LmpwZ3w3YWQ0ODFhYWZjZTI0ZDYyZmVjZjcyZDk2ZDI3MWI4NDNiN2MyYjc5YWIwNjE5ZjM5ZDU0MmZkYWJiNjIwZGRl',
        description: "apple ipad air 5th gen 2022 27.69 cm (10.9 inch) wi-fi tablet 64 GB",
        offerPrice: 54900.00,
        mrp: 599000.00,

    },
    {
        id: 8,
        tag: '',
        itemImage: 'https://www.reliancedigital.in/medias/OnePlus-Pad-Go-8-GB-RAM-128-GB-Twin-Mint-LTE-Tablet-494268172-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjg0OXxpbWFnZS9qcGVnfGltYWdlcy9oNjAvaDMzLzEwMDY3NjU0NTA4NTc0LmpwZ3w5MWVmOTQ1ZWY0OGRhZmM2MjE0ZDEzMWQzZGM1YTc3YmY2MzM5ZTk3YjcyZTVkNDQzMTg4MDc5MGZjMWRhNGJl',
        description: "one plus pad go 28.82 cm (11.35 inches) 8GB RAM, 128 GN, twin mint, LTE tablet",
        offerPrice: 21999.00,
        mrp: 30990.00,

    },
    {
        id: 9,
        tag: 'Rs.3000 Instant Discount on ICICI & SBI Cards',
        itemImage: 'https://www.reliancedigital.in/medias/iPad-10thGen-Wi-Fi-Silver-493178823-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMzExM3xpbWFnZS9qcGVnfGltYWdlcy9oNzUvaDVjLzEwMDE1NTE3Mjc4MjM4LmpwZ3wwZTRlZGUyOTBmYzUxMDIzM2E3MDY1MjZhNWQ4NGM0ODc3NjZiZWY5Mjk3MDA4YTExOThhZDdjZGU3OWM2N2Jk',
        description: "apple ipad 10th gen (2022) 29.69 cm (10.9 inch) wi-fi tablet, 64 GB Silver",
        offerPrice: 33900.00,
        mrp: 39900.00,

    },
    {
        id: 10,
        tag: '6 Month No Cost EMI',
        itemImage: "https://www.reliancedigital.in/medias/Samsung-Tab-A9-Plus-494268075-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjE5OHxpbWFnZS9qcGVnfGltYWdlcy9oNmQvaDMwLzEwMDU5NjY5NjY3ODcwLmpwZ3xiNmY2NjQ5YTAxYWI1OTQxMTAyNGE0ZThlY2VlN2NlMGQ1Yzg5ZTQzYjVhNDhlNWFkMTc0MmQzNGRjNTE2Yzc3",
        description: "samsung galaxy 27.94 cm (11.0 inch) wi-fi + cellular tablet 128 GB 8GB silver",
        offerPrice: 24999.00,
        mrp: 32999.00,

    },
 

]

const sectionContainer = document.getElementById('cooler')

collerData.forEach(item =>{
    console.log(item)
    sectionContainer.innerHTML += `
        <div class="product">
            <p class='tag'>${item.tag}</p>
            <div class="item__img">
                <img src=${item.itemImage} alt="">
            </div>
            <p class="descrption">${item.description}</p>
            <div class="price__book">
                <p class="offer-price">Offer Price: ₹${item.offerPrice}</p>
                <p class="mrp">M.R.P: ₹${item.mrp}</p>
                <p>You Save: ${Math.floor(((item.mrp - item.offerPrice) / item.mrp ) * 100)}% (₹${item.mrp - item.offerPrice})</p>
            </div>
        </div>
    ` 
})
const acSection = document.getElementById('ac')
acData.forEach(item =>{
    console.log(item)
    acSection.innerHTML += `
        <div class="product">
            <p class='tag'>${item.tag}</p>
            <div class="item__img">
                <img src=${item.itemImage} alt="">
            </div>
            <p class="descrption">${item.description}</p>
            <div class="price__book">
                <p class="offer-price">Offer Price: ₹${item.offerPrice}</p>
                <p class="mrp">M.R.P: ₹${item.mrp}</p>
                <p>You Save: ${Math.floor(((item.mrp - item.offerPrice) / item.mrp ) * 100)}% (₹${item.mrp - item.offerPrice})</p>
            </div>
        </div>
    ` 
})

const mobileSection = document.getElementById('mobile')
mobileData.forEach(item =>{
    console.log(item)
    mobileSection.innerHTML += `
        <div class="product">
            <div class="item__img">
                <img src=${item.itemImage} alt="">
            </div>
            <p class="descrption">${item.description}</p>
            <div class="price__book">
                <p class="offer-price">Offer Price: ₹${item.offerPrice}</p>
                <p class="mrp">M.R.P: ₹${item.mrp}</p>
                <p>You Save: ${Math.floor(((item.mrp - item.offerPrice) / item.mrp ) * 100)}% (₹${item.mrp - item.offerPrice})</p>
            </div>
        </div>
    ` 
})





// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("poster1");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 5; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }