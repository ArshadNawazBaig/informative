import { ImageResponse } from 'next/server';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.log('error');
  }

  return res.json();
};

export default async function og({ params: { slug } }) {
  const post = await getData(slug);

  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <img alt="title" src={post?.img} />
        <div
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(1, 1, 1, 0.4)',
            color: '#fff',
            maxWidth: '1200px',
            maxHeight: '630px',
            padding: '30px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <h4
                style={{
                  padding: '3px 8px',
                  borderRadius: '5px',
                  textTransform: 'capitalize',
                  fontSize: '16px',
                  background: '#ff2c54',
                  marginBottom: 0,
                }}
              >
                {post?.catSlug}
              </h4>
            </div>
            <h2
              style={{
                marginTop: '10px',
                fontSize: '2rem',
                fontWeight: '900',
                textTransform: 'capitalize',
                marginBottom: 0,
                textAlign: 'center',
                maxWidth: '400px',
              }}
            >
              {post?.title}
            </h2>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                alt="title"
                src={post?.author?.image}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '100px',
                  border: '2px solid #ff2c54',
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    marginBottom: 0,
                  }}
                >
                  {post?.author?.name}
                </h3>
                <p
                  style={{
                    marginTop: '5px',
                    fontsize: '14px',
                  }}
                >
                  {post?.createdAt?.substring(0, 10)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
