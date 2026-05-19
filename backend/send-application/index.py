import json
import os
import urllib.request


def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта в Telegram-бот"""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '—')
    phone = body.get('phone', '—')
    service = body.get('service', '—')
    description = body.get('description', '—')

    text = (
        f"📋 <b>Новая заявка с сайта</b>\n\n"
        f"👤 <b>Имя:</b> {name}\n"
        f"📞 <b>Телефон:</b> {phone}\n"
        f"🔧 <b>Вид экспертизы:</b> {service}\n"
        f"📝 <b>Описание:</b> {description}"
    )

    token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = '257251476'
    url = f'https://api.telegram.org/bot{token}/sendMessage'

    payload = json.dumps({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'HTML'
    }).encode('utf-8')

    req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'})
    urllib.request.urlopen(req)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
