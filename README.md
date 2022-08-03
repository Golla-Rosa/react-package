System created to ease the use of css layouts in react apps.


# Install
```
npm i layoutpackage
```


# Usage

Creating a 3x3 layout
```tsx
      <Grid styleProps={{columns: 3, rows: 3}}>
	      <Navbar styleProps={{row: 1, column: "1/4"}}>
		      <Grid styleProps={{columns: 3, rows: 1}}>
			      <Logo styleProps={{column: 1}}></Logo>
			      <Menu styleProps={{column: 2}}></Menu>
			      <Login styleProps={{column: 3}}></Login>
		      </Grid>
	      </Navbar>
	      <Body styleProps={{row: 2, column: "1/4" }}>
		      // vous avez capté le délire, 69 la trik
	      </Body>
	      
	      <Footer styleProps={{row: 3, column: "1/4"}}</Footer>
      </Grid>
```