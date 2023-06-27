npm package to simplify the use of grid.

 I do not mantain it as was an experiment

System created to ease the use of grid layouts in react apps.


# Install
```
npm i layoutpackage
```


# Usage
import Grid from 'react-package'

```tsx
	<Grid styleProps={{columns: columLength, rows: rowLength}}/>
		<Children styleProps={{column: "startColumn/endColumn"}}/>
		// add 	any children
	</Grid>
```
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
		      
	      </Body>
	      
	      <Footer styleProps={{row: 3, column: "1/4"}}</Footer>
      </Grid>
```
