// Supabase-backed item store
import { supabase } from './supabase';

export interface RentalItem {
  id: string;
  name: string;
  category: string;
  description: string;
  condition: string;
  pricePerDay: number;
  pricePerWeek: number;
  pricePerHour: number;
  location: string;
  distance: string;
  images: string[]; // URLs
  ownerName: string;
  ownerAvatar: string;
  rating: number;
  reviewCount: number;
  status: 'available' | 'rented' | 'low_stock';
  createdAt: string;
  isUserPosted: boolean;
}

// Seed data that gets inserted into Supabase if the table is empty
export const SEED_ITEMS: Omit<RentalItem, 'id' | 'createdAt'>[] = [
  {
    name: 'Sony WH-1000XM5 Studio',
    category: 'Electronics',
    description:
      'Industry-leading noise cancellation with two processors controlling eight microphones, and a specially developed driver unit. Perfect for professional studio work or immersive travel.',
    condition: 'Good Condition',
    pricePerDay: 45,
    pricePerWeek: 180,
    pricePerHour: 10,
    location: 'Andheri East',
    distance: '1.2km',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2c_hxK53r6o5iWpAp5bYJsyUVCN__q0ExyyCJal64K2QQsu5iVqiZOio5IxTNZtNC5ULlSC5JGVw7cme26sv7YPBuqpTd0_c3iPNP3h6sGAsOc9RB0Aw_bJLalNruqsFlBGbPo9FSlEy1K_Kk3L8uwXN9xBqgTO3EV2prcR7XXB9u5qtWNPjqxHH53MyfYScrf9AB9l3OXMArksj3i1BW6AAtWsOYQrxmMQyZbMzCL-vPSyBDZOUOIWiVCj3THsJDM90estlI5g',
    ],
    ownerName: 'Arjun Sharma',
    ownerAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTHCWY31TOpvP2pTEm_fWpH5baLAvlokb8564DdR55AqDRCOfOxnTs3rTb-6aJmBRtcY1A7J0CjlWrrli2Yi-4FZ4ZjXKholO8RQW7iV6VdCcEGjBg1e2qV7PI-nuQ07IGyPujFE2xOCpRXeM5TkKMzbCnCkCz2s8lFMXfu9sC3ZKMJY2wppa-M-HcknEtqB8LeG1NDiWF3bePrZ7RtDJ3ACpaLIL8ck3Gd9VHKl6ArfkXVjgv37TXCN_h1EFh5ozqsjDH0pC4WA',
    rating: 4.9,
    reviewCount: 128,
    status: 'available',
    isUserPosted: false,
  },
  {
    name: 'Smartphone X Ultra',
    category: 'Electronics',
    description:
      'Latest flagship smartphone with 256GB storage, 5G connectivity, 120Hz OLED display and cinema-grade 4K video recording. Ideal for content creators on the go.',
    condition: 'Brand New',
    pricePerDay: 15,
    pricePerWeek: 85,
    pricePerHour: 5,
    location: 'Bandra West',
    distance: '15km',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDKhJENkh864vLZKKJuvzoejuwmHR-9OU07KFQXrU31cbHsHggEL6fHLu23H_DIx3BdG5D4xE_PoynVe7p2_w219KI4NKXXaotDma58sBnWg1vT1FDIO-veJoxWx2R2UtmByqqNNezvykSDJt9GenlKEo5SiMl-UBEvyalpZQtSj07ihIoTxlkvg1bbWyquQSxgIkXj_rt4cUBclT3s_aQa8hNl587KJ3Cro6X6xFYXRK6B8ugC5aouZmpHR60PDsKhwdHFb_VKzQ',
    ],
    ownerName: 'Priya Nair',
    ownerAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTHCWY31TOpvP2pTEm_fWpH5baLAvlokb8564DdR55AqDRCOfOxnTs3rTb-6aJmBRtcY1A7J0CjlWrrli2Yi-4FZ4ZjXKholO8RQW7iV6VdCcEGjBg1e2qV7PI-nuQ07IGyPujFE2xOCpRXeM5TkKMzbCnCkCz2s8lFMXfu9sC3ZKMJY2wppa-M-HcknEtqB8LeG1NDiWF3bePrZ7RtDJ3ACpaLIL8ck3Gd9VHKl6ArfkXVjgv37TXCN_h1EFh5ozqsjDH0pC4WA',
    rating: 4.8,
    reviewCount: 87,
    status: 'available',
    isUserPosted: false,
  },
  {
    name: 'Power Drill XR Pro',
    category: 'Tools',
    description:
      'Professional-grade 18V brushless power drill with 2 lithium batteries and a hard carrying case. Perfect for DIY projects or construction work.',
    condition: 'Good Condition',
    pricePerDay: 22,
    pricePerWeek: 110,
    pricePerHour: 8,
    location: 'Kurla',
    distance: '42km',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA6VH7uwIhbegwBZB7voO02dydAy3NHqE8CdRWB0_McTnm72bedjW5CtGrmGoZ6Tgb6TKifsJk5yB8E2dUSuhJdX8VqxoC-KzTBmHOZKcYjrV8o_1QiqnyGqMeM05yn2ttXsHYjYnVO7PKBlauDPyQrwen9lagKn3YDzPBrM-IJ7aGiG7x4Nkhjm0AUAUKYBkQIwasE2Y3-M4spBw8UVCnl_Lb_o2EWbmg8mfzj6galc4G7-KxHrPygo59btWZQjDZcqGUVNzv-Pg',
    ],
    ownerName: 'Rahul Desai',
    ownerAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTHCWY31TOpvP2pTEm_fWpH5baLAvlokb8564DdR55AqDRCOfOxnTs3rTb-6aJmBRtcY1A7J0CjlWrrli2Yi-4FZ4ZjXKholO8RQW7iV6VdCcEGjBg1e2qV7PI-nuQ07IGyPujFE2xOCpRXeM5TkKMzbCnCkCz2s8lFMXfu9sC3ZKMJY2wppa-M-HcknEtqB8LeG1NDiWF3bePrZ7RtDJ3ACpaLIL8ck3Gd9VHKl6ArfkXVjgv37TXCN_h1EFh5ozqsjDH0pC4WA',
    rating: 5.0,
    reviewCount: 43,
    status: 'available',
    isUserPosted: false,
  },
];

// Map Supabase snake_case rows to our camelCase RentalItem interface
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapRow(row: any): RentalItem {
  return {
    id: row.id,
    name: row.name,
    category: row.category,
    description: row.description ?? '',
    condition: row.condition ?? '',
    pricePerDay: Number(row.pricePerDay ?? row.price_per_day ?? 0),
    pricePerWeek: Number(row.pricePerWeek ?? row.price_per_week ?? 0),
    pricePerHour: Number(row.pricePerHour ?? row.price_per_hour ?? 0),
    location: row.location ?? '',
    distance: row.distance ?? '',
    images: row.images ?? [],
    ownerName: row.ownerName ?? row.owner_name ?? '',
    ownerAvatar: row.ownerAvatar ?? row.owner_avatar ?? '',
    rating: Number(row.rating ?? 0),
    reviewCount: Number(row.reviewCount ?? row.review_count ?? 0),
    status: row.status ?? 'available',
    createdAt: row.createdAt ?? row.created_at ?? new Date().toISOString(),
    isUserPosted: row.isUserPosted ?? row.is_user_posted ?? true,
  };
}

/** Fetch all items from Supabase. Seeds the table if empty. */
export async function getAllItems(): Promise<RentalItem[]> {
  const { data, error } = await supabase
    .from('rental_items')
    .select('*')
    .order('createdAt', { ascending: false });

  if (error) {
    console.error('Supabase getAllItems error:', error.message);
    return [];
  }

  // Auto-seed if the table is empty
  if (!data || data.length === 0) {
    await seedItems();
    const { data: seeded } = await supabase
      .from('rental_items')
      .select('*')
      .order('createdAt', { ascending: false });
    return (seeded ?? []).map(mapRow);
  }

  return data.map(mapRow);
}

/** Fetch a single item by id */
export async function getItemById(id: string): Promise<RentalItem | null> {
  const { data, error } = await supabase
    .from('rental_items')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    console.error('Supabase getItemById error:', error?.message);
    return null;
  }
  return mapRow(data);
}

/** Insert a new item into Supabase */
export async function addItem(
  item: Omit<RentalItem, 'id' | 'createdAt' | 'isUserPosted'>
): Promise<RentalItem | null> {
  const { data, error } = await supabase
    .from('rental_items')
    .insert([{ ...item, isUserPosted: true }])
    .select()
    .single();

  if (error || !data) {
    console.error('Supabase addItem error:', error?.message);
    return null;
  }
  return mapRow(data);
}

/** Seed the table with initial items */
async function seedItems() {
  const { error } = await supabase.from('rental_items').insert(
    SEED_ITEMS.map((item) => ({ ...item, isUserPosted: false }))
  );
  if (error) {
    console.error('Supabase seed error:', error.message);
  }
}
