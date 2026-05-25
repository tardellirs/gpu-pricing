# GPU Pricing — Aluguel por Hora (1x GPU)

**Data da coleta:** 24/05/2026
**Escopo:** apenas 1x GPU, preço por hora, On-Demand e Spot. Planos mensais/anuais/reservados de longo prazo e serverless puro (APIs LLM) foram ignorados.

> Observação: preços flutuam — sempre confirme na página oficial antes de tomar decisão.

---

## Índice de provedores

1. [RunPod](#runpod) — Community + Secure Cloud + Spot
2. [Salad](#salad) — rede distribuída (consumer GPUs), tiers de prioridade
3. [Modal](#modal) — serverless, cobrança por segundo
4. [Lambda](#lambda) — só on-demand (sem spot)
5. [Genesis Cloud](#genesis-cloud) — HGX (8x mínimo) + consumer 1x
6. [Hyperstack](#hyperstack) — só on-demand (sem spot público)
7. [GPUHub](#gpuhub) — provedor SG/CN, USD pay-as-you-go
8. [Novita](#novita) — On-Demand + Spot (~50% off)
9. [Verda (ex-DataCrunch)](#verda-ex-datacrunch) — On-Demand + Spot (~65% off)
10. [Dataoorts](#dataoorts) — preço por modelo não é público
11. [Spheron](#spheron) — marketplace descentralizado, Spot até -50%
12. [Packet.ai](#packetai) — só on-demand (sem spot)
13. [Vultr](#vultr) — Cloud GPU + Bare Metal, só on-demand
14. [DigitalOcean](#digitalocean) — GPU Droplets, só on-demand
15. [Jarvis Labs](#jarvis-labs) — On-Demand + Spot (até -56%, não publicado)
16. [Qubrid](#qubrid) — só on-demand (sem spot público)
17. [Vast.ai](#vastai) — marketplace, On-demand + Interruptible (~50% off)
18. [Akash](#akash) — marketplace descentralizado (blockchain), só on-demand
19. [CoreWeave](#coreweave) — Classic (1x GPU) + cluster (8x mín)
20. [TensorDock](#tensordock) — marketplace, só on-demand listado
21. [Thunder Compute](#thunder-compute) — Prototyping (virtualizado) + Production

---

## RunPod

**Fonte:** https://www.runpod.io/pricing
**Modelo:** Community Cloud (marketplace de provedores parceiros) + Secure Cloud (Tier 3/4, SOC 2) + Spot/Interruptible (preempção).
Preços flutuam ±15% em Community Cloud. Várias GPUs consumer só existem em Community.

| GPU | VRAM | Secure (USD/h) | Community (USD/h) | Spot (USD/h) | vCPU | RAM |
|---|---|---|---|---|---|---|
| NVIDIA B200 | 180 GB | $5.89 | $5.89 | — | 28 | 283 GB |
| NVIDIA HGX B300 | 288 GB | $6.94 | $6.94 | — | — | — |
| NVIDIA H200 | 141 GB | $4.39 | $3.59 | — | 24 | 276 GB |
| NVIDIA H100 SXM | 80 GB | $3.29 | $2.69 | ~$4.76 (Active) | 20 | 125 GB |
| NVIDIA H100 NVL | 94 GB | ~$2.79 | $2.59 | — | 16 | 94 GB |
| NVIDIA H100 PCIe | 80 GB | $2.39 | $1.99 | — | 16 | 188 GB |
| NVIDIA A100 SXM | 80 GB | $1.49 | $1.39 | $2.17 (Active) | 16 | 125 GB |
| NVIDIA A100 PCIe | 80 GB | $1.39 | $1.19 | — | 8 | 117 GB |
| NVIDIA RTX Pro 6000 | 96 GB | — | $1.69 | — | 16 | 188 GB |
| NVIDIA L40S | 48 GB | — | $0.79 | — | 16 | 94 GB |
| NVIDIA RTX 6000 Ada | 48 GB | — | $0.74 | — | 10 | 167 GB |
| NVIDIA L40 | 48 GB | — | $0.69 | — | 8 | 94 GB |
| NVIDIA RTX 5090 | 32 GB | — | $0.69 | — | 9 | 35 GB |
| NVIDIA RTX 4090 | 24 GB | $0.69 | $0.34 | $0.77 (Active) | 6 | 41 GB |
| NVIDIA L4 | 24 GB | — | $0.44 | — | 12 | 50 GB |
| NVIDIA A40 | 48 GB | — | $0.35 | — | 9 | 50 GB |
| NVIDIA RTX A6000 | 48 GB | — | $0.33 | — | 9 | 50 GB |
| NVIDIA RTX 3090 | 24 GB | — | $0.22 | — | 16 | 125 GB |
| NVIDIA RTX A5000 | 24 GB | — | $0.16 | — | 9 | 25 GB |

---

## Salad

**Fonte:** https://salad.com/pricing (página oficial bloqueou WebFetch — dados via gpuvec, computeprices, blog.salad)
**Modelo:** rede distribuída (SaladCloud Container Engine). Cobrança por segundo. 4 tiers de prioridade (Batch → Low → Medium → High). Preços abaixo são **Batch (mais barato)**.
**Importante:** vCPU e RAM cobrados separadamente: **$0.004/vCPU/h + $0.001/GB RAM/h**. Não há "spot" tradicional — Community é interruptível por design.

| GPU | VRAM | Preço Batch (USD/h) | Notas |
|---|---|---|---|
| RTX 5090 | 32 GB | $0.27 | Blackwell |
| RTX 4090 | 24 GB | $0.18 | Ada Lovelace |
| RTX 4080 | 16 GB | $0.13 | |
| RTX 4070 Ti Super | 16 GB | $0.13 | |
| RTX 3090 Ti | 24 GB | $0.13 | |
| RTX 3090 | 24 GB | $0.10 | $0.124 em tier non-batch |
| A5000 | 24 GB | $0.11 | |
| RTX 4070 / 4070 Ti | 12 GB | $0.10 | |
| RTX 4060 Ti | 16 GB | $0.10 | |
| RTX 3080 Ti | 12 GB | $0.10 | |
| RTX 3080 | 10 GB | $0.09 | |
| RTX 2080 Ti | 11 GB | $0.08 | |
| RTX 3070 / 3070 Ti | 8 GB | $0.07 | |
| RTX 3060 | 12 GB | $0.06 | |
| RTX 2080 | 8 GB | $0.06 | |
| RTX 3050 | 8 GB | $0.04 | |
| RTX 2070 | 8 GB | $0.03 | |
| RTX 2060 | 6 GB | $0.03 | |
| GTX 10x0/16x0 (várias) | 4–8 GB | $0.02–$0.03 | Pascal/Turing |
| L40 | 48 GB | $0.32 | Data Center |
| A100 PCIe | 40 GB | $0.40 | Data Center |
| A100 SXM | 80 GB | $0.50 | Data Center |
| H100 NVL | 94 GB | sob consulta | Data Center |

---

## Modal

**Fonte:** https://modal.com/pricing
**Modelo:** serverless, cobrança por segundo. Sem custo de idle. Preço/hora abaixo = $/s × 3600.
**Importante:** CPU ($0.0472/core/h, mín. 0.125), RAM ($0.0080/GiB/h) e Volume storage ($0.09/GiB/mês) cobrados separadamente.

| GPU | VRAM | $/s | $/h |
|---|---|---|---|
| NVIDIA B200 | 180 GB | $0.001736 | $6.25 |
| NVIDIA H200 | 141 GB | $0.001261 | $4.54 |
| NVIDIA H100 | 80 GB | $0.001097 | $3.95 |
| NVIDIA RTX PRO 6000 | 96 GB | $0.000842 | $3.03 |
| NVIDIA A100 80GB | 80 GB | $0.000694 | $2.50 |
| NVIDIA A100 40GB | 40 GB | $0.000583 | $2.10 |
| NVIDIA L40S | 48 GB | $0.000542 | $1.95 |
| NVIDIA A10 | 24 GB | $0.000306 | $1.10 |
| NVIDIA L4 | 24 GB | $0.000222 | $0.80 |
| NVIDIA T4 | 16 GB | $0.000164 | $0.59 |

---

## Lambda

**Fonte:** https://lambda.ai/pricing
**Modelo:** **só on-demand** (Lambda não oferece spot). Reserved/1-Click Clusters ignorados. Tudo é 1x GPU.

| GPU | VRAM | On-Demand (USD/h) | vCPU / RAM / SSD |
|---|---|---|---|
| NVIDIA B200 SXM6 | 180 GB | $6.99 | 26 / 360 GiB / 2.75 TiB |
| NVIDIA H100 SXM | 80 GB | $4.29 | 26 / 225 GiB / 2.75 TiB |
| NVIDIA H100 PCIe | 80 GB | $3.29 | 26 / 225 GiB / 1 TiB |
| NVIDIA GH200 | 96 GB | $2.29 | 64 / 432 GiB / 4 TiB |
| NVIDIA A100 SXM | 40 GB | $1.99 | 30 / 220 GiB / 512 GiB |
| NVIDIA A100 PCIe | 40 GB | $1.99 | 30 / 225 GiB / 512 GiB |
| NVIDIA A10 | 24 GB | $1.29 | 30 / 226 GiB / 1.3 TiB |
| NVIDIA A6000 | 48 GB | $1.09 | 14 / 100 GiB / 512 GiB |
| NVIDIA Quadro RTX 6000 | 24 GB | $0.69 | 14 / 46 GiB / 512 GiB |

---

## Genesis Cloud

**Fonte:** https://www.genesiscloud.com/pricing
**Importante:** HGX (H100/H200/B200) só vendidas em nó mínimo **8x** — não disponíveis como 1x GPU. Apenas as consumer abaixo são 1x.
Não há Spot público.

### Disponíveis como 1x GPU

| GPU | VRAM | On-Demand (USD/h) | vCPU / RAM |
|---|---|---|---|
| RTX 4090 | 24 GB | $0.55 | 8 / 48 GB |
| RTX 3090 | 24 GB | $0.20 | 4/24 ou 8/48 |
| RTX 3080 | 10 GB | $0.08 | 4 ou 8 / 16 ou 32 GB |

### Apenas em 8x (referência, fora do escopo)

| GPU | VRAM | USD/h por GPU |
|---|---|---|
| HGX H100 | 80 GB | $1.60 |
| HGX H200 | 141 GB | $2.80 |
| HGX B200 | 180 GB | $2.80 |
| GB200 NVL72 | — | sob consulta |

---

## Hyperstack

**Fonte:** https://www.hyperstack.cloud/gpu-pricing
**Modelo:** só on-demand (reservados longos ignorados). Cobrança por minuto, sem custos de egress.

| GPU | VRAM | On-Demand (USD/h) | vCPU / RAM | Notas |
|---|---|---|---|---|
| NVIDIA H200 SXM | 141 GB | $3.50 | 22 / 225 GB | |
| NVIDIA H100 SXM | 80 GB | $2.40 | 24 / 240 GB | |
| NVIDIA H100 NVLink | 80 GB | $1.95 | 31 / 180 GB | NVLink |
| NVIDIA H100 PCIe | 80 GB | $1.90 | 28 / 180 GB | |
| NVIDIA RTX Pro 6000 SE | 96 GB | $1.80 | 31 / 180 GB | |
| NVIDIA A100 SXM | 80 GB | $1.60 | 24 / 120 GB | |
| NVIDIA A100 NVLink | 80 GB | $1.40 | 31 / 240 GB | NVLink |
| NVIDIA A100 PCIe | 80 GB | $1.35 | 28 / 120 GB | |
| NVIDIA L40 | 48 GB | $1.00 | 28 / 120 GB | |
| NVIDIA RTX A6000 | 48 GB | $0.50 | 28 / 58 GB | |
| NVIDIA RTX A4000 | 16 GB | $0.15 | 6 / 24 GB | |

---

## GPUHub

**Fonte:** https://www.gpuhub.com/home (docs: https://docs.gpuhub.com)
**Modelo:** provedor sediado em Singapura, pricing em USD. Apenas pay-as-you-go + reservas (ignoradas). **Não há tier Spot/Interruptible** público.
Storage: 50 GB grátis por instância; adicional $40/TB/mês. Câmbio aproximado: 1 USD ≈ 7,25 CNY.

| GPU | VRAM | On-Demand (USD/h) | (CNY/h ~) | Notas |
|---|---|---|---|---|
| RTX Pro 6000 | 96 GB | $0.96 | ¥6,96 | Blackwell workstation |
| A800 80G | 80 GB | $1.06 | ¥7,69 | Variante "China" do A100 |
| RTX 4090 (48 GB mod) | 48 GB | $0.46 | ¥3,34 | Variante 48GB modificada; 12 vCPU / 96 GB RAM |
| RTX 5090 | 32 GB | $0.38 | ¥2,76 | 32 vCPU / 100 GB RAM |
| RTX 4080 (32 GB mod) | 32 GB | $0.21 | ¥1,52 | Variante 32GB modificada |

---

## Novita

**Fonte:** https://novita.ai/pricing
**Modelo:** On-Demand + Spot (~50% de desconto).
H200/B200 só aparecem em GPU **Bare Metal** (8x por nó) — fora do escopo aqui.

| GPU | VRAM | Conexão | On-Demand (USD/h) | Spot (USD/h) |
|---|---|---|---|---|
| H100 SXM | 80 GB | SXM | $2.59 | $1.30 |
| A100 SXM | 80 GB | SXM | $1.60 | $0.80 |
| RTX 6000 Ada | 48 GB | PCIe | $0.77 | $0.39 |
| RTX 5090 (High freq.) | 32 GB | PCIe | $0.72 | $0.36 |
| RTX 4090 (High freq.) | 24 GB | PCIe | $0.69 | $0.35 |
| RTX 4090 | 24 GB | PCIe | $0.67 | $0.34 |
| RTX 5090 | 32 GB | PCIe | $0.60 | $0.30 |
| L40S | 48 GB | PCIe | $0.55 | — |
| RTX 3090 | 24 GB | PCIe | $0.21 | $0.11 |

> **Nota:** Novita também tem **Dedicated Endpoints** (inferência gerenciada, sem acesso root/OS, fora do escopo de "instância GPU pura" — mas referência útil): RTX 4090 $0.61/h · H100 $1.99/h · H200 $2.99/h. E **GPU Bare Metal** (8x mínimo, fora do escopo de 1x): H100 SXM $1.70/GPU/h · B200 SXM $4.77/GPU/h.

---

## Verda (ex-DataCrunch)

**Fonte:** https://verda.com/products (não há /pricing separado)
**Modelo:** On-Demand (Pay-As-You-Go) + Spot (~65% desconto, com risco de interrupção). Sem lock-in.

| GPU | VRAM | On-Demand (USD/h) | Spot (USD/h) |
|---|---|---|---|
| GB300 SXM6 | 288 GB | $7.99 | $2.80 |
| B300 SXM6 | 262 GB | $6.99 | $2.45 |
| B200 SXM6 | 180 GB | $4.89 | $1.71 |
| H200 SXM5 | 141 GB | $3.39 | $1.19 |
| H100 SXM5 | 80 GB | $2.29 | $0.80 |
| RTX PRO 6000 | 96 GB | $1.69 | $0.59 |
| A100 SXM4 80GB | 80 GB | $1.29 | $0.45 |
| L40S | 48 GB | $0.91 | $0.32 |
| RTX 6000 ADA | 48 GB | $0.83 | $0.29 |
| A100 SXM4 40GB | 40 GB | $0.72 | ~$0.25 (estimado) |
| RTX A6000 | 48 GB | $0.49 | $0.17 |
| V100 | 16 GB | $0.14 | $0.05 |

---

## Dataoorts

**Fonte:** https://dataoorts.com/pricing/
**Importante:** Dataoorts **não publica pricing por modelo** na página pública — o preço é "dinâmico" (DDRA) e só visível no console autenticado.

- Faixa anunciada: **$0,30 – $2,70 /h** (KVM / bare-metal X-Series, on-demand dinâmico)
- Ciclo de cobrança: a cada 2 min (X-Series) ou 10 min (Nova)
- Surcharge instância parada: $0,036/h
- Storage YOTTA: $0,0002/GB/h
- Nova Instances (NVLink): preços "Real Time", restrito a Northern Europe
- Marketplace de bare-metal **8x GPU mensal** (fora do escopo): H200 $2,40/GPU/h · B200 $4,15/GPU/h · B300 $5,20/GPU/h

Sem menção a preço Spot distinto.

---

## Spheron

**Fonte:** https://www.spheron.network/pricing/
**Modelo:** marketplace descentralizado ("5+ providers", "live marketplace rates"). Cobrança por minuto.

> **⚠️ Atenção sobre a interpretação dos preços:** a página mostra "starting from the cheapest live offer" — ou seja, o valor exibido é a **oferta mais barata disponível naquele momento** no marketplace, que muito provavelmente já é uma **oferta spot/interruptível** de algum provedor da rede (não on-demand garantido). Ex.: o RTX 4090 a **$0.67/h com 512 GB RAM + 64 vCPUs + 15 TB NVMe** está claramente em faixa spot — on-demand dedicado em outros provedores fica acima disso. Trate os valores abaixo como **piso do marketplace** (≈ spot), não como on-demand puro. Reservas dedicadas seriam ~2× ou mais.

| GPU | VRAM | Categoria | Cheapest live offer (USD/h) |
|---|---|---|---|
| B300 (Blackwell Ultra) | 262 GB | Data Center | $2.45 |
| GH200 (Grace Hopper) | 96 GB | Data Center | $1.88 |
| H100 | 80 GB | Data Center | $1.73 |
| B200 (Blackwell) | 192 GB | Data Center | $1.71 |
| H200 | 141 GB | Data Center | $1.19 |
| RTX 5090 | 32 GB | Consumer | $0.89 |
| L40S | 48 GB | Data Center | $0.75 |
| RTX 4090 | 24 GB | Consumer | $0.67 |
| RTX PRO 6000 | 96 GB | Pro | $0.59 |
| A100 | 80 GB | Data Center | $0.45 |

Spheron também menciona "spot up to 50% off" como diferencial, mas dada a natureza marketplace, a fronteira entre "on-demand barato" e "spot" não é nítida na UI pública. Pré-venda (sem preço público): R100 (Rubin, 288 GB), GB300 (288 GB), GB200 (192 GB).

---

## Packet.ai

**Fonte:** https://packet.ai/ (bloqueou WebFetch; dados via getdeploying.com/packet-ai)
**Confirmação:** é a **packet.ai** (GPU cloud B200/H200/RTX 6000), **não** packet.net (Equinix Metal).
**Importante:** Packet.ai **não oferece spot** — só on-demand pay-as-you-go (reservas longas ignoradas). Diferencial: "no contract, no spot, no cluster minimums".

| GPU | VRAM | On-Demand (USD/h) | vCPU / RAM | Notas |
|---|---|---|---|---|
| NVIDIA B200 NVL | 180 GB | $3.75 | 12 / 150 GB | Banner promocional menciona $2.95/h em outra config |
| NVIDIA H200 | 141 GB | listado, preço não publicado em fonte secundária | — | — |
| NVIDIA RTX Pro 6000 (PCIe) | 96 GB | $1.25 | 6 / 64 GB | |
| NVIDIA A100 | 80 GB | $1.43 | — | |
| NVIDIA L40S | 48 GB | $0.92 | — | |

Faixa geral declarada: $0.42 – $4.00 /h por GPU.

---

## Vultr

**Fonte:** https://www.vultr.com/pricing/
**Modelo:** Cloud GPU (virtualizado, com frações) + Bare Metal. **Não há spot.**
Boa parte dos HGX/Blackwell/AMD é vendida apenas como **bundle 8x** — abaixo, o "1x" é o preço unitário derivado do bundle.

### Cloud GPU

| GPU | VRAM | USD/h (1x) | Notas |
|---|---|---|---|
| NVIDIA A16 | 16 GB | $0.471 | Full GPU; frações disponíveis (até 16x); 6 vCPU / 64 GB |
| NVIDIA L40S | 48 GB | $1.671 | 16 vCPU / 180 GB / 1.2 TB NVMe |
| NVIDIA A40 | 48 GB | $1.712 | 24 vCPU / 120 GB |
| NVIDIA GH200 | 96 GB | $1.990 | 1x único, 72 vCPU ARM, 480 GB |
| NVIDIA A100 PCIe | 80 GB | $2.397 | 12 vCPU / 120 GB |
| NVIDIA HGX H100 (SXM) | 80 GB | $1.990/GPU | **só bundle 8x** (servidor $15.92/h) |
| NVIDIA HGX A100 (SXM) | 80 GB | $2.800/GPU | **só bundle 8x** ($22.40/h) |
| NVIDIA HGX B200 | 192 GB | $1.990/GPU | **só bundle 8x** ($15.92/h) |
| AMD MI300X | 192 GB | $1.850/GPU | **só bundle 8x** ($14.80/h) |
| AMD MI325X | 256 GB | $2.000/GPU | **só bundle 8x** ($16.00/h) |
| AMD MI355X | 288 GB | $2.590/GPU | **só bundle 8x** ($20.72/h) |

### Bare Metal GPU (starting at, por GPU/hora)

| GPU | VRAM | USD/h por GPU | Notas |
|---|---|---|---|
| NVIDIA L40S | 48 GB | $0.848 | 8x GPU / 64 vCPU / 2 TB |
| NVIDIA A100 PCIe | 80 GB | $1.290 | 4x GPU / 48 vCPU / 512 GB |
| NVIDIA HGX A100 (SXM) | 80 GB | $1.490 | 8x GPU |
| AMD MI300X | 192 GB | $1.750 | 8x GPU |
| NVIDIA GH200 | 96 GB | $1.990 | 1x GPU single-node |
| NVIDIA HGX H100 (SXM) | 80 GB | $1.990 | 8x GPU |
| AMD MI325X | 256 GB | $2.000 | 8x GPU |
| AMD MI355X | 288 GB | $2.650 | 8x GPU |
| NVIDIA HGX B200 | 192 GB | $2.990 | 8x GPU |

> H200 não consta no catálogo público da Vultr.

---

## DigitalOcean

**Fonte:** https://www.digitalocean.com/pricing/gpu-droplets
**Modelo:** GPU Droplets, **só on-demand** (sem spot). Cobrança por segundo, mínimo 5 min. Inclui 10–15 TiB de transferência mensal.

| GPU | VRAM | USD/h | vCPU | RAM | NVMe |
|---|---|---|---|---|---|
| NVIDIA RTX 4000 Ada | 20 GB | $0.76 | 8 | 32 GiB | 500 GiB boot |
| NVIDIA RTX 6000 Ada | 48 GB | $1.57 | 8 | 64 GiB | 500 GiB boot |
| NVIDIA L40S | 48 GB | $1.57 | 8 | 64 GiB | 500 GiB boot |
| AMD MI300X | 192 GB | $1.99 | 20 | 240 GiB | 720 GiB + 5 TiB scratch |
| NVIDIA HGX H100 | 80 GB | $3.39 | 20 | 240 GiB | 720 GiB + 5 TiB scratch |
| NVIDIA HGX H200 | 141 GB | $3.44 | 24 | 240 GiB | 720 GiB + 5 TiB scratch |
| AMD MI350X | 288 GB | $4.40 | 24 | 256 GiB | 720 GiB + 5 TiB scratch |

---

## Jarvis Labs

**Fonte:** https://jarvislabs.ai/pricing
**Modelo:** On-Demand + Spot ("save up to 56%", **preço spot por GPU não publicado**). Cobrança por minuto. Storage $0.10/GB/mês à parte.

| GPU | VRAM | On-Demand (USD/h) | Spot estimado (-56%) | vCPU / RAM |
|---|---|---|---|---|
| H100 SXM | 80 GB | $2.69 | ~$1.18 | 16 / 200 GB |
| RTX Pro 6000 Blackwell | 96 GB | $1.89 | ~$0.83 | 28 / 160 GB |
| A100 | 80 GB | $1.49 | ~$0.66 | 16 / 112 GB |
| A100 | 40 GB | $0.89 | ~$0.39 | 16 / 112 GB |
| L4 | 24 GB | $0.44 | ~$0.19 | 32 / 124 GB |
| A30 | 24 GB | $0.41 | ~$0.18 | 16 / 112 GB |

---

## Qubrid

**Fonte:** https://platform.qubrid.com/pricing (vazio sem login) + páginas marketing em qubrid.com/gpu-instances/*
**Modelo:** só on-demand (sem spot público). Cobrança por segundo. Crédito grátis $1 para novos usuários. Storage à parte ($0.10/GB/mês).

| GPU | VRAM | Conexão | On-Demand (USD/h) | Notas |
|---|---|---|---|---|
| NVIDIA B200 | 180 GB | SXM (HGX) | $5.63 | CUDA 12.8 |
| NVIDIA H200 | 141 GB | SXM (HGX) | $4.55 | CUDA 12.4 |
| NVIDIA H100 | 80 GB | SXM | $3.83 | |
| NVIDIA A100 | 80 GB | SXM | $1.69 | |
| NVIDIA A100 | 40 GB | PCIe | $1.50 | Máx 4 GPUs/instância |
| NVIDIA T4 | 16 GB | PCIe | $0.73 | |
| NVIDIA L40S / A10G / L4 | — | — | preço não publicado | Listados no catálogo, sem página individual |

---

## Vast.ai

**Fonte:** https://vast.ai/pricing + páginas por GPU
**Modelo:** marketplace 40+ datacenters. Preço flutua. Dois modos: **On-demand** + **Interruptible** (~50% do on-demand, doc oficial). Reserved ignorado.

> Min = host mais barato no momento da coleta · Méd = média de marketplace (agregadores 2026). Interruptible estimado quando não publicado por GPU.

| GPU | VRAM | On-demand Min | On-demand Méd | Interruptible (~) |
|---|---|---|---|---|
| RTX 3060 | 12 GB | $0.05 | — | — |
| RTX 3070 / 3070 Ti | 8 GB | $0.06–$0.07 | — | — |
| RTX 3080 / 3080 Ti | 10–12 GB | $0.09–$0.10 | — | — |
| RTX 3090 | 24 GB | $0.15 | $0.21 | ~$0.11 |
| RTX 4090 | 24 GB | $0.31 | $0.35–$0.55 | ~$0.29 |
| RTX 5090 | 32 GB | $0.60 | $0.51–$0.89 | ~$0.40 |
| RTX 2080 Ti | 11 GB | $0.08 | — | — |
| RTX 5070 / 5070 Ti | 12–16 GB | $0.10–$0.13 | — | — |
| RTX A6000 | 48 GB | $0.39 | ~$0.45 | ~$0.25 |
| A40 | 48 GB | $0.41 | ~$0.45 | — |
| L4 | 24 GB | $0.13 | — | — |
| L40 | 40 GB | $0.58 | ~$0.60 | — |
| L40S | 48 GB | ~$0.40 | $0.56 | ~$0.28 |
| A10 | 24 GB | $0.20 | — | — |
| V100 | 16 GB | ~$0.15 | — | — |
| A100 PCIe 40GB | 40 GB | $0.67 | $0.87 | — |
| A100 SXM 80GB | 80 GB | $0.60 | $0.78–$2.06 | ~$0.47 |
| H100 PCIe | 80 GB | $1.97 | ~$2.10 | — |
| H100 NVL | 94 GB | $1.69 | ~$1.80 | — |
| H100 SXM5 | 80 GB | $1.49 | $1.53–$2.27 | ~$1.10 |
| H200 | 141 GB | ~$2.40 | $3.50–$5.00 | n/d (oferta limitada) |
| B200 | 192 GB | ~$4.40 | ~$5.98 | n/d |

---

## Akash

**Fonte:** https://akash.network/pricing/gpus/
**Modelo:** marketplace descentralizado (blockchain Cosmos). Pagamento em AKT/USDC, valores em USD. **Só on-demand.**
Disponibilidade flutua — total da rede: ~260 GPUs, ~169 livres na coleta.

| GPU | VRAM | Min (USD/h) | Méd pond. | Max | Disp. (livre/total) |
|---|---|---|---|---|---|
| B300 (Blackwell) | 180 GB | $6.00 | $6.00 | $6.00 | 1/1 |
| B200 (Blackwell) | 180 GB | $5.00 | $5.00 | $5.00 | 1/1 |
| H200 | 141 GB | $2.90 | $3.02 | $3.06 | 42/72 |
| RTX PRO 6000 SE | 96 GB | $1.63 | $1.63 | $1.63 | 24/24 |
| RTX PRO 6000 WE | 96 GB | $1.51 | $1.51 | $1.51 | 0/1 |
| H100 | 80 GB | $1.25 | $1.25 | $1.25 | 63/104 |
| A100 | 80 GB | $1.08 | $1.08 | $1.08 | 13/16 |
| RTX 5090 | 32 GB | $0.60 | $0.67 | $1.26 | 4/9 |
| RTX 4090 | 24 GB | $0.17 | $0.40 | $0.48 | 3/13 (preço bem variável) |
| RTX 4000 Ada | 20 GB | $0.36 | $0.36 | $0.36 | 1/1 |
| RTX 3090 | 24 GB | $0.14 | $0.19 | $0.40 | 4/5 |
| RTX 3090 Ti | 24 GB | $0.36 | $0.36 | $0.36 | 1/1 |
| RTX 4060 Ti | 16 GB | $0.04 | $0.04 | $0.04 | 1/1 |
| RTX 3060 | 12 GB | $0.13 | $0.13 | $0.13 | 1/1 |
| T4 | 16 GB | $0.12 | $0.12 | $0.12 | 5/5 |
| P40 | 24 GB | $0.07 | $0.07 | $0.07 | 2/2 |
| GTX 1080 Ti | 11 GB | $0.11 | $0.11 | $0.11 | 2/2 |

> Sem A6000, L40/L40S, L4, V100 ou GPUs AMD no inventário.

---

## CoreWeave

**Fontes:** https://www.coreweave.com/pricing + https://www.coreweave.com/pricing/classic
**Modelo:** dois tiers distintos.

### CoreWeave Classic (1x GPU on-demand público)

vCPU $0.01/h (até 48/GPU) · RAM $0.005/GB/h (até 256 GB/GPU) · billing por segundo

| GPU | VRAM | USD/h (1x) |
|---|---|---|
| NVIDIA H100 PCIe | 80 GB | $4.25 |
| NVIDIA HGX H100 (SXM) | 80 GB | $4.76 |
| A100 80GB PCIe | 80 GB | $2.21 |
| A100 80GB NVLink | 80 GB | $2.21 |
| A100 40GB PCIe | 40 GB | $2.06 |
| A100 40GB NVLink | 40 GB | $2.06 |
| RTX A6000 | 48 GB | $1.28 |
| A40 | 48 GB | $1.28 |
| Tesla V100 NVLink | 16 GB | $0.80 |
| RTX A5000 | 24 GB | $0.77 |
| RTX A4000 | 16 GB | $0.61 |
| Quadro RTX 5000 | 16 GB | $0.57 |
| Quadro RTX 4000 | 8 GB | $0.24 |

### CoreWeave atual (cluster — preço por GPU normalizado, vendido em pacote 8x)

| GPU | VRAM | USD/h por GPU (norm.) | Preço real do nó 8x |
|---|---|---|---|
| HGX H100 (SXM) | 80 GB | ~$6.16 | $49.24/h |
| HGX H200 (SXM) | 141 GB | ~$6.31 | $50.44/h |
| A100 SXM 80GB | 80 GB | ~$2.70 | $21.60/h |
| L40S | 48 GB | ~$2.25 | $18.00/h |
| HGX B200 | 192 GB | ~$8.60 | $68.80/h |
| HGX B300 | — | Contact sales | — |
| GB200 NVL72 | — | — | $42.00/h (pacote 4-GPU) |
| GB300 NVL72 | — | Contact sales | — |
| **GH200** (1x) | 96 GB | **$6.50** | única 1x no pricing novo |

> Spot existe nos pacotes HGX (40–60% off) mas não em 1x GPU.

---

## TensorDock

**Fonte:** https://www.tensordock.com/cloud-gpus.html
**Modelo:** marketplace de hosts. Cobrança por segundo. Sem distinção spot/on-demand pública.

> **Aviso:** página parece desatualizada (referências internas a jul/2024). Confirmar antes de usar.

| GPU | VRAM | Tipo | USD/h |
|---|---|---|---|
| H100 SXM5 | 80 GB | SXM5 | $2.25 |
| A100 SXM4 | 80 GB | SXM4 | $1.80 |
| A100 PCIe | 80 GB | PCIe | $1.50 |
| L40 | 48 GB | Datacenter | $0.95 |
| RTX 6000 Ada | 48 GB | Workstation | $0.75 |
| RTX A6000 | 48 GB | Workstation | $0.45 |
| RTX 4090 | 24 GB | Consumer | $0.35 |
| RTX 3090 | 24 GB | Consumer | $0.20 |
| V100 SXM2 | 16 GB | SXM2 | $0.17 |
| RTX A4000 | 16 GB | Workstation | $0.10 |

> Extras: vCPU $0.003/h · RAM $0.002/GB/h · NVMe $0.00005/GB/h. H200, B200, MI300, RTX 5090 ausentes.

---

## Thunder Compute

**Fonte:** https://www.thundercompute.com/pricing
**Modelo:** GPU virtualizada (proprietário — "GPU-over-IP"). Dois modos:
- **Prototyping** = compartilhado/virtualizado, performance variável (≈ "spot/community")
- **Production** = dedicado, com garantias

> **Atenção:** o site mostra "180 GB VRAM" para todas as GPUs (bug de template). Abaixo coloquei a VRAM real do hardware.

### Prototyping

| GPU | VRAM real | USD/h |
|---|---|---|
| RTX A6000 | 48 GB | $0.27 |
| A100 80GB | 80 GB | $0.78 |
| L40 | 48 GB | $0.89 |
| L40S | 48 GB | $0.99 |
| H100 PCIe | 80 GB | $1.38 |

### Production

| GPU | VRAM real | USD/h |
|---|---|---|
| L40 | 48 GB | $1.38 |
| L40S | 48 GB | $1.39 |
| A100 80GB NVLink | 80 GB | $1.49 |
| H100 PCIe NVLink | 80 GB | $1.38 |

---

# Resumo cross-provider — Top GPUs

## H100 80 GB (SXM ou PCIe — On-Demand), ordenado por preço

| Provedor | Variante | USD/h |
|---|---|---|
| Akash | H100 (marketplace, uniforme) | $1.25 |
| Thunder Compute (Prototyping) | H100 PCIe | $1.38 |
| Thunder Compute (Production) | H100 PCIe NVLink | $1.38 |
| Vast.ai (min) | H100 SXM5 | $1.49 |
| Vast.ai (min) | H100 NVL | $1.69 |
| Hyperstack | H100 PCIe | $1.90 |
| Hyperstack | H100 NVLink | $1.95 |
| Vast.ai (min) | H100 PCIe | $1.97 |
| RunPod (Community) | H100 PCIe | $1.99 |
| TensorDock | H100 SXM5 | $2.25 |
| Verda | H100 SXM5 | $2.29 |
| Hyperstack | H100 SXM | $2.40 |
| Novita | H100 SXM | $2.59 |
| RunPod (Community) | H100 SXM | $2.69 |
| Jarvis Labs | H100 SXM | $2.69 |
| RunPod (Secure) | H100 PCIe | $2.39 |
| RunPod (Secure) | H100 SXM | $3.29 |
| Lambda | H100 PCIe | $3.29 |
| DigitalOcean | HGX H100 | $3.39 |
| Qubrid | H100 SXM | $3.83 |
| Modal | H100 | $3.95 |
| CoreWeave (Classic) | H100 PCIe | $4.25 |
| Lambda | H100 SXM | $4.29 |
| CoreWeave (Classic) | HGX H100 SXM | $4.76 |
| Spheron* | H100 | $1.73 (*cheapest offer, prov. spot) |

**Spot/Interruptible mais baratos:**
- H100 80GB: **Verda Spot $0.80** · Vast.ai Interruptible ~$1.10 · Jarvis estimado ~$1.18 · Novita Spot $1.30
- H200 141GB: **Verda Spot $1.19** · Spheron $1.19 (cheapest)
- A100 80GB: **Verda Spot $0.45** · Vast.ai Interruptible ~$0.47 · Spheron $0.45 (cheapest) · Novita Spot $0.80 · Jarvis estimado ~$0.66

## RTX 4090 24GB — On-Demand, ordenado

| Provedor | USD/h |
|---|---|
| Akash (min do marketplace) | $0.17 |
| Salad (Batch) | $0.18 |
| Vast.ai (min) | $0.31 |
| RunPod (Community) | $0.34 |
| TensorDock | $0.35 |
| Akash (média marketplace) | $0.40 |
| GPUHub (variante 48GB mod) | $0.46 |
| Genesis Cloud | $0.55 |
| Vast.ai (média) | $0.35–$0.55 |
| Novita | $0.67 |
| RunPod (Secure) | $0.69 |
| Spheron* | $0.67 (*cheapest offer, prov. spot) |

**Spot/Interruptible RTX 4090:** Novita $0.34 · Vast.ai ~$0.29 · RunPod Active $0.77

## A100 80GB — On-Demand, ordenado

| Provedor | Variante | USD/h |
|---|---|---|
| Akash (marketplace) | A100 | $1.08 |
| RunPod (Community) | A100 PCIe | $1.19 |
| Verda | A100 SXM4 80GB | $1.29 |
| Vultr (Bare Metal) | A100 PCIe | $1.29 |
| Hyperstack | A100 PCIe | $1.35 |
| RunPod (Community) | A100 SXM | $1.39 |
| RunPod (Secure) | A100 PCIe | $1.39 |
| Hyperstack | A100 NVLink | $1.40 |
| Packet.ai | A100 | $1.43 |
| Jarvis Labs | A100 | $1.49 |
| Vultr (Bare Metal HGX) | A100 SXM | $1.49 |
| RunPod (Secure) | A100 SXM | $1.49 |
| TensorDock | A100 PCIe | $1.50 |
| Hyperstack | A100 SXM | $1.60 |
| Novita | A100 SXM | $1.60 |
| Qubrid | A100 SXM | $1.69 |
| TensorDock | A100 SXM4 | $1.80 |
| Lambda | A100 SXM/PCIe (40GB) | $1.99 |
| CoreWeave (Classic) | A100 PCIe/NVLink | $2.21 |
| Vultr (Cloud) | A100 PCIe | $2.40 |
| Modal | A100 80GB | $2.50 |
| Vultr (Cloud HGX) | A100 SXM | $2.80 (bundle 8x) |
| Salad | A100 SXM 80GB | $0.50 (Batch — interruptível) |
| Spheron* | A100 | $0.45 (*cheapest offer, prov. spot) |
| Vast.ai (min) | A100 SXM 80GB | $0.60 |
| Thunder Compute (Prototyping) | A100 80GB | $0.78 |

---

# Fontes (todas consultadas em 24/05/2026)

- https://www.runpod.io/pricing
- https://salad.com/pricing (+ gpuvec.com, computeprices.com, getdeploying.com/salad)
- https://modal.com/pricing
- https://lambda.ai/pricing
- https://www.genesiscloud.com/pricing
- https://www.hyperstack.cloud/gpu-pricing
- https://www.gpuhub.com/home (+ docs.gpuhub.com)
- https://novita.ai/pricing
- https://verda.com/products
- https://dataoorts.com/pricing/
- https://www.spheron.network/pricing/
- https://packet.ai/ (via getdeploying.com/packet-ai)
- https://www.vultr.com/pricing/
- https://www.digitalocean.com/pricing/gpu-droplets
- https://jarvislabs.ai/pricing
- https://platform.qubrid.com/pricing (+ qubrid.com/gpu-instances/*)
- https://vast.ai/pricing (+ páginas por GPU + agregadores)
- https://akash.network/pricing/gpus/
- https://www.coreweave.com/pricing (+ /pricing/classic)
- https://www.tensordock.com/cloud-gpus.html
- https://www.thundercompute.com/pricing
