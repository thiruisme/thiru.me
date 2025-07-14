<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="UTF-8"/>

<!-- Template to format RFC822 date to readable IST format -->
<xsl:template name="formatDate">
  <xsl:param name="dateString"/>
  <xsl:value-of select="$dateString"/>
</xsl:template>

<xsl:template match="/">
<html>
<head>
  <title><xsl:value-of select="/rss/channel/title"/> RSS Feed</title>
  <style>
    body {
      font-family: "avenir-lt-pro", sans-serif;
      line-height: 1.6;
      color: #222;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      background: #e8f5e9;
    }
    h1 { color: #0f623b; }
    .post {
      background: #f5fff4;
      padding: 1.5rem;
      margin: 1rem 0;
      border-radius: 6px;
      box-shadow: 0 2px 6px rgba(0,0,0,.15);
    }
    .post-title {
      color: #064926;
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .post-date {
      color: #666;
      font-size: 0.9rem;
    }
    .post-date .timezone {
      color: #999;
      font-size: 0.85rem;
    }
    .subscribe-info {
      background: #dcefd9;
      padding: 1rem;
      border-radius: 6px;
      margin-bottom: 2rem;
    }
    a { color: #5db92c; }
    code {
      background: #f0f0f0;
      padding: 2px 4px;
      border-radius: 3px;
    }
  </style>
</head>
<body>
  <h1><xsl:value-of select="/rss/channel/title"/></h1>
  <div class="subscribe-info">
    <p>This is an RSS feed. Subscribe by copying the URL into your RSS reader.</p>
    <p><strong>Feed URL:</strong> <code><xsl:value-of select="/rss/channel/link"/>rss.xml</code></p>
  </div>
  <p><xsl:value-of select="/rss/channel/description"/></p>
  
  <h2>Recent Posts</h2>
  <xsl:for-each select="/rss/channel/item">
    <div class="post">
      <div class="post-title">
        <a>
          <xsl:attribute name="href">
            <xsl:value-of select="link"/>
          </xsl:attribute>
          <xsl:value-of select="title"/>
        </a>
      </div>
      <div class="post-date">
        <xsl:call-template name="formatDate">
          <xsl:with-param name="dateString" select="pubDate"/>
        </xsl:call-template>
      </div>
      <p><xsl:value-of select="description"/></p>
    </div>
  </xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>