const MONTHS_TR = [
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık'
];

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = MONTHS_TR[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
} 