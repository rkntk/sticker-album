/* js/supabase.js */

var SUPABASE_URL = 'https://hagmtizalkiwpjguwozm.supabase.co';
var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhZ210aXphbGtpd3BqZ3V3b3ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwNzAzMTAsImV4cCI6MjEwNDY0NjMxMH0.wP2uFC1jGtNM4gBsIpqgJ0aBzK-AqOZsLlguqkw0A08';

var db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
