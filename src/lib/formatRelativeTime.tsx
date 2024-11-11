// utils/formatRelativeTime.js
export function formatRelativeTime(dateParam:Date) {
    const now:any = new Date();
    const date:any = new Date(dateParam);
    
    const seconds = Math.floor((now - date) / 1000); // difference in seconds
    
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  
    // Define thresholds for different units
    const thresholds:any = [
      { value: 60, unit: 'second' },
      { value: 60, unit: 'minute' },
      { value: 24, unit: 'hour' },
      { value: 30, unit: 'day' },
      { value: 12, unit: 'month' },
      { value: Infinity, unit: 'year' }
    ];
  
    let diff = seconds;
    for (let i = 0; i < thresholds.length; i++) {
      const threshold = thresholds[i];
      if (Math.abs(diff) < threshold.value) {
        return rtf.format(Math.floor(diff), threshold.unit);
      }
      diff = diff / threshold.value;
    }
  }
  