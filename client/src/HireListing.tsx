// where companies post listing

// should have name of company, and job title,
// description , and a button to express intest

type FeedItem = {
    id: number;
    author: string;
    content: string;
    timestamp: string;
  };
  
  // Define props for the Feed component
  type FeedProps = {
    items: FeedItem[];
  };

function HireListing({ items } : FeedProps) {
    return (
      <div className="feed">
        {items.map(item => (
          <div key={item.id} className="feed-item">
            <h4>{item.author}</h4>
            <p>{item.content}</p>
            <small>{new Date(item.timestamp).toLocaleString()}</small>
          </div>
        ))}
      </div>
    );
  }



  export default HireListing;


