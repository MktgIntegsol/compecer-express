import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wnfueoilmtrijnhiidrn.supabase.co';
const supabaseKey = 'sb_publishable_-AL5cJcU9x57N4QhdDqaY-w_r9kDa0IP';
const supabase = createClient(supabaseUrl, supabaseKey);

async function createUser() {
    console.log('Creando usuario...');
    const { data, error } = await supabase.auth.signUp({
        email: 'juanjo.manso@compecer.com',
        password: 'Demo123456',
    });

    if (error) {
        console.error('Error creando usuario:', error.message);
    } else {
        console.log('Usuario creado satisfactoriamente:', data.user?.email);
    }
}

createUser();
