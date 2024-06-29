import { mantleSepoliaTestnet } from '@wagmi/core/chains';
import {
  arbitrum,
  arbitrumSepolia,
  blast,
  blastSepolia,
  mantle,
} from 'wagmi/chains';

export const ARB_CHAIN_IDS = [arbitrum.id, arbitrumSepolia.id];

export const MANTLE_CHAIN_IDS = [mantle.id, mantleSepoliaTestnet.id];

export const BLAST_CHAIN_IDS = [blast.id, blastSepolia.id];
